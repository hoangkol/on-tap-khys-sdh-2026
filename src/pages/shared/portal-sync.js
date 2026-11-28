// ==========================================================================
// PORTAL SYNC ENGINE — CHUYỂN ĐỔI NHANH TIẾN ĐỘ GIỮA CÁC THIẾT BỊ
// Hỗ trợ: Mã chuyển nhanh (KHYS1/KHYS0 + Link/QR), File JSON (Merge/Overwrite),
// và Đồng bộ Cloud Supabase tùy chọn (0 dependency, chạy thuần trình duyệt).
// ==========================================================================

(function (global) {
  'use strict';

  const SYNC_VERSION = 1;
  const ACTIVITY_KEY = 'yds_portal_activity_v1';
  const THEME_KEY = 'yds_portal_theme';
  const SUPA_CFG_KEY = 'yds_portal_supabase_cfg_v1';

  const SUPABASE_SETUP_SQL = `-- Chạy đoạn SQL này 1 lần trong Supabase SQL Editor để bật đồng bộ Cloud
create table if not exists public.khys_sync_profiles (
  sync_id text primary key,
  payload jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.khys_sync_profiles enable row level security;

drop policy if exists "khys_sync_public_rw" on public.khys_sync_profiles;
create policy "khys_sync_public_rw"
  on public.khys_sync_profiles
  for all
  using (true)
  with check (true);`;

  function getSubjects() {
    return Array.isArray(global.PORTAL_SUBJECTS) ? global.PORTAL_SUBJECTS : [];
  }

  function safeParseJson(raw) {
    if (!raw || typeof raw !== 'string') return null;
    try {
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === 'object' ? parsed : null;
    } catch (e) {
      return null;
    }
  }

  function collectExportPayload(storage) {
    const store = storage || (typeof global.localStorage !== 'undefined' ? global.localStorage : null);
    const subjects = getSubjects();
    const subjectData = {};
    const themeData = {};

    let totalAnswered = 0;
    let totalCorrect = 0;
    let totalCompleted = 0;

    if (store) {
      subjects.forEach((subj) => {
        const raw = store.getItem(subj.storageKey);
        const parsed = safeParseJson(raw);
        if (parsed && Object.keys(parsed).length > 0) {
          subjectData[subj.slug] = parsed;
        }
        const t = store.getItem(subj.themeKey);
        if (t === 'dark' || t === 'light') {
          themeData[subj.slug] = t;
        }
        if (typeof global.readSubjectProgress === 'function') {
          const snap = global.readSubjectProgress(subj, store);
          totalAnswered += snap.answeredQuestions || 0;
          totalCorrect += snap.correctQuestions || 0;
          totalCompleted += snap.completedLessons || 0;
        }
      });
    }

    const portalTheme = store ? (store.getItem(THEME_KEY) || 'light') : 'light';
    const activity = store ? safeParseJson(store.getItem(ACTIVITY_KEY)) : null;

    return {
      app: 'on-tap-khys-sdh-2026',
      version: SYNC_VERSION,
      exportedAt: new Date().toISOString(),
      meta: {
        completedLessons: totalCompleted,
        answeredQuestions: totalAnswered,
        correctQuestions: totalCorrect,
        subjectsCount: Object.keys(subjectData).length
      },
      portalTheme,
      subjectThemes: themeData,
      activity: activity || null,
      subjects: subjectData
    };
  }

  function normalizeIncomingPayload(rawObj) {
    if (!rawObj || typeof rawObj !== 'object') {
      throw new Error('Dữ liệu không phải định dạng JSON hợp lệ.');
    }
    if (rawObj.app && rawObj.app !== 'on-tap-khys-sdh-2026') {
      throw new Error('Gói dữ liệu không thuộc Cổng Ôn Tập KHYS 2026.');
    }
    if (!rawObj.subjects || typeof rawObj.subjects !== 'object') {
      throw new Error('Thiếu dữ liệu tiến độ môn học (subjects).');
    }
    return {
      app: 'on-tap-khys-sdh-2026',
      version: Number(rawObj.version || 1),
      exportedAt: rawObj.exportedAt || new Date().toISOString(),
      portalTheme: rawObj.portalTheme === 'dark' ? 'dark' : 'light',
      subjectThemes: rawObj.subjectThemes && typeof rawObj.subjectThemes === 'object' ? rawObj.subjectThemes : {},
      activity: rawObj.activity && typeof rawObj.activity === 'object' ? rawObj.activity : null,
      subjects: rawObj.subjects
    };
  }

  function bytesToBase64Url(bytes) {
    let binary = '';
    const chunk = 0x8000;
    for (let i = 0; i < bytes.length; i += chunk) {
      binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
    }
    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }

  function base64UrlToBytes(str) {
    const clean = String(str || '').trim().replace(/-/g, '+').replace(/_/g, '/');
    const padLen = (4 - (clean.length % 4)) % 4;
    const padded = clean + '='.repeat(padLen);
    const binary = atob(padded);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  }

  async function compressBytes(bytes) {
    if (typeof CompressionStream === 'undefined') return null;
    try {
      const cs = new CompressionStream('deflate-raw');
      const writer = cs.writable.getWriter();
      writer.write(bytes);
      writer.close();
      const buf = await new Response(cs.readable).arrayBuffer();
      return new Uint8Array(buf);
    } catch (e) {
      return null;
    }
  }

  async function decompressBytes(bytes) {
    if (typeof DecompressionStream === 'undefined') {
      throw new Error('Trình duyệt hiện tại không hỗ trợ giải nén mã KHYS1. Hãy dùng File JSON hoặc cập nhật trình duyệt.');
    }
    const ds = new DecompressionStream('deflate-raw');
    const writer = ds.writable.getWriter();
    writer.write(bytes);
    writer.close();
    const buf = await new Response(ds.readable).arrayBuffer();
    return new Uint8Array(buf);
  }

  async function encodeTransferCode(payload) {
    const json = JSON.stringify(payload);
    const utf8 = new TextEncoder().encode(json);
    const compressed = await compressBytes(utf8);
    if (compressed && compressed.length < utf8.length) {
      return 'KHYS1:' + bytesToBase64Url(compressed);
    }
    return 'KHYS0:' + bytesToBase64Url(utf8);
  }

  async function decodeTransferCode(rawInput) {
    let token = String(rawInput || '').trim();
    if (!token) throw new Error('Vui lòng dán mã chuyển đổi hoặc đường dẫn chứa mã.');

    const hashMatch = token.match(/khys-sync=([^&\s]+)/);
    if (hashMatch) {
      token = decodeURIComponent(hashMatch[1]);
    }

    if (token.startsWith('KHYS1:')) {
      const bytes = base64UrlToBytes(token.slice(6));
      const plainBytes = await decompressBytes(bytes);
      const text = new TextDecoder().decode(plainBytes);
      return normalizeIncomingPayload(JSON.parse(text));
    }
    if (token.startsWith('KHYS0:')) {
      const bytes = base64UrlToBytes(token.slice(6));
      const text = new TextDecoder().decode(bytes);
      return normalizeIncomingPayload(JSON.parse(text));
    }
    if (token.startsWith('{')) {
      return normalizeIncomingPayload(JSON.parse(token));
    }
    throw new Error('Mã chuyển đổi không đúng định dạng (cần bắt đầu bằng KHYS1:, KHYS0:, hoặc link #khys-sync=).');
  }

  function mergeAnswerMaps(curAns, incAns) {
    const curKeys = Object.keys(curAns || {});
    const incKeys = Object.keys(incAns || {});
    if (curKeys.length === 0) return { merged: { ...(incAns || {}) }, mode: 'inc' };
    if (incKeys.length === 0) return { merged: { ...(curAns || {}) }, mode: 'cur' };

    const overlap = curKeys.some((k) => Object.prototype.hasOwnProperty.call(incAns, k));
    if (!overlap) {
      return { merged: { ...incAns, ...curAns }, mode: 'disjoint' };
    }
    if (incKeys.length > curKeys.length) {
      return { merged: { ...curAns, ...incAns }, mode: 'inc' };
    }
    return { merged: { ...incAns, ...curAns }, mode: 'cur' };
  }

  function mergeV1Subject(curObj, incObj) {
    const cur = curObj && typeof curObj === 'object' ? curObj : {};
    const inc = incObj && typeof incObj === 'object' ? incObj : {};
    const out = {};
    const lessonIds = new Set([...Object.keys(cur), ...Object.keys(inc)]);

    lessonIds.forEach((lid) => {
      const cEntry = cur[lid];
      const iEntry = inc[lid];
      if (!cEntry && iEntry) {
        out[lid] = JSON.parse(JSON.stringify(iEntry));
        return;
      }
      if (cEntry && !iEntry) {
        out[lid] = JSON.parse(JSON.stringify(cEntry));
        return;
      }
      const cAns = (cEntry && cEntry.answered) || {};
      const iAns = (iEntry && iEntry.answered) || {};
      const cCnt = Object.keys(cAns).length;
      const iCnt = Object.keys(iAns).length;
      const cScore = Number((cEntry && cEntry.score) || 0);
      const iScore = Number((iEntry && iEntry.score) || 0);
      const total = Number((cEntry && cEntry.total) || (iEntry && iEntry.total) || 24);

      const res = mergeAnswerMaps(cAns, iAns);
      let finalScore = 0;
      if (res.mode === 'disjoint') {
        finalScore = Math.min(Object.keys(res.merged).length, cScore + iScore);
      } else if (res.mode === 'inc') {
        finalScore = Math.min(Object.keys(res.merged).length, Math.max(iScore, iCnt === cCnt ? cScore : 0));
      } else {
        finalScore = Math.min(Object.keys(res.merged).length, Math.max(cScore, cCnt === iCnt ? iScore : 0));
      }
      out[lid] = { answered: res.merged, score: finalScore, total };
    });

    return out;
  }

  function mergeV2Subject(curObj, incObj) {
    const cur = curObj && typeof curObj === 'object' ? curObj : {};
    const inc = incObj && typeof incObj === 'object' ? incObj : {};
    const curAnswers = cur.answers || {};
    const incAnswers = inc.answers || {};
    const curComp = cur.completedLessons || {};
    const incComp = inc.completedLessons || {};

    const outAnswers = {};
    const outComp = {};

    const answerIds = new Set([...Object.keys(curAnswers), ...Object.keys(incAnswers)]);
    answerIds.forEach((lid) => {
      const res = mergeAnswerMaps(curAnswers[lid] || {}, incAnswers[lid] || {});
      if (Object.keys(res.merged).length > 0) {
        outAnswers[lid] = res.merged;
      }
    });

    const compIds = new Set([...Object.keys(curComp), ...Object.keys(incComp)]);
    compIds.forEach((lid) => {
      const c = curComp[lid];
      const i = incComp[lid];
      const bestScore = Math.max(Number((c && c.bestScore) || 0), Number((i && i.bestScore) || 0));
      const total = Number((c && c.total) || (i && i.total) || 24);
      outComp[lid] = { bestScore, total };
    });

    return { answers: outAnswers, completedLessons: outComp };
  }

  function mergeActivityData(curAct, incAct, mergedSubjectSnapshots) {
    const cur = curAct && typeof curAct === 'object' ? curAct : { days: {}, dailyGoal: 20 };
    const inc = incAct && typeof incAct === 'object' ? incAct : { days: {}, dailyGoal: 20 };
    const outDays = {};

    const allDays = new Set([
      ...Object.keys(cur.days || {}),
      ...Object.keys(inc.days || {})
    ]);
    allDays.forEach((dayKey) => {
      const cDay = (cur.days && cur.days[dayKey]) || {};
      const iDay = (inc.days && inc.days[dayKey]) || {};
      const mergedSubjects = { ...(iDay.subjects || {}) };
      Object.keys(cDay.subjects || {}).forEach((slug) => {
        mergedSubjects[slug] = Math.max(Number(mergedSubjects[slug] || 0), Number(cDay.subjects[slug] || 0));
      });
      const answered = Math.max(Number(cDay.answered || 0), Number(iDay.answered || 0));
      const correct = Math.min(answered, Math.max(Number(cDay.correct || 0), Number(iDay.correct || 0)));
      if (answered > 0) {
        outDays[dayKey] = { answered, correct, subjects: mergedSubjects };
      }
    });

    return {
      days: outDays,
      dailyGoal: Number(cur.dailyGoal || inc.dailyGoal || 20),
      lastSnapshots: mergedSubjectSnapshots
    };
  }

  function buildVirtualStore(map) {
    return {
      getItem(k) {
        return Object.prototype.hasOwnProperty.call(map, k) ? map[k] : null;
      }
    };
  }

  function previewImportPayload(incomingPayload, storage) {
    const payload = normalizeIncomingPayload(incomingPayload);
    const store = storage || (typeof global.localStorage !== 'undefined' ? global.localStorage : null);
    const subjects = getSubjects();
    const readProg = global.readSubjectProgress;

    const incomingMap = {};
    subjects.forEach((s) => {
      if (payload.subjects[s.slug]) {
        incomingMap[s.storageKey] = JSON.stringify(payload.subjects[s.slug]);
      }
    });
    const incStore = buildVirtualStore(incomingMap);

    let curAnsweredTotal = 0;
    let curCompletedTotal = 0;
    let incAnsweredTotal = 0;
    let incCompletedTotal = 0;
    let incCorrectTotal = 0;

    const rows = subjects.map((subj) => {
      const cur = readProg ? readProg(subj, store) : { completedLessons: 0, answeredQuestions: 0, accuracy: 0 };
      const inc = readProg ? readProg(subj, incStore) : { completedLessons: 0, answeredQuestions: 0, correctQuestions: 0, accuracy: 0 };
      curAnsweredTotal += cur.answeredQuestions || 0;
      curCompletedTotal += cur.completedLessons || 0;
      incAnsweredTotal += inc.answeredQuestions || 0;
      incCompletedTotal += inc.completedLessons || 0;
      incCorrectTotal += inc.correctQuestions || 0;
      return {
        slug: subj.slug,
        shortName: subj.shortName,
        accent: subj.accent,
        totalLessons: subj.lessonsCount,
        totalQuestions: subj.questionsCount,
        curCompleted: cur.completedLessons || 0,
        curAnswered: cur.answeredQuestions || 0,
        incCompleted: inc.completedLessons || 0,
        incAnswered: inc.answeredQuestions || 0,
        incAccuracy: inc.accuracy || 0
      };
    });

    const incDaysCount = payload.activity && payload.activity.days
      ? Object.keys(payload.activity.days).filter((k) => Number((payload.activity.days[k] && payload.activity.days[k].answered) || 0) > 0).length
      : 0;

    return {
      exportedAt: payload.exportedAt,
      curAnsweredTotal,
      curCompletedTotal,
      incAnsweredTotal,
      incCompletedTotal,
      incCorrectTotal,
      incAccuracy: incAnsweredTotal > 0 ? Math.round((incCorrectTotal / incAnsweredTotal) * 100) : 0,
      incDaysCount,
      rows
    };
  }

  function applyImportPayload(incomingPayload, mode, storage) {
    const payload = normalizeIncomingPayload(incomingPayload);
    const store = storage || (typeof global.localStorage !== 'undefined' ? global.localStorage : null);
    if (!store) throw new Error('Trình duyệt không hỗ trợ localStorage.');

    const subjects = getSubjects();
    const isOverwrite = mode === 'overwrite';
    const nextSnapshots = {};

    subjects.forEach((subj) => {
      const incRawObj = payload.subjects[subj.slug] || null;
      const curRawObj = safeParseJson(store.getItem(subj.storageKey));

      let finalObj = null;
      if (isOverwrite) {
        finalObj = incRawObj ? JSON.parse(JSON.stringify(incRawObj)) : null;
      } else if (incRawObj || curRawObj) {
        finalObj = subj.progressSchema === 'v2'
          ? mergeV2Subject(curRawObj, incRawObj)
          : mergeV1Subject(curRawObj, incRawObj);
      }

      if (finalObj && Object.keys(finalObj).length > 0) {
        store.setItem(subj.storageKey, JSON.stringify(finalObj));
      } else if (isOverwrite) {
        store.removeItem(subj.storageKey);
      }

      if (typeof global.readSubjectProgress === 'function') {
        const snap = global.readSubjectProgress(subj, store);
        nextSnapshots[subj.slug] = {
          answered: snap.answeredQuestions || 0,
          correct: snap.correctQuestions || 0
        };
      }
    });

    const curActivity = safeParseJson(store.getItem(ACTIVITY_KEY));
    const finalActivity = isOverwrite
      ? {
          days: (payload.activity && payload.activity.days) || {},
          dailyGoal: Number((payload.activity && payload.activity.dailyGoal) || 20),
          lastSnapshots: nextSnapshots
        }
      : mergeActivityData(curActivity, payload.activity, nextSnapshots);
    store.setItem(ACTIVITY_KEY, JSON.stringify(finalActivity));

    if (isOverwrite && payload.portalTheme) {
      store.setItem(THEME_KEY, payload.portalTheme === 'dark' ? 'dark' : 'light');
    }

    return {
      mode: isOverwrite ? 'overwrite' : 'merge',
      subjectsUpdated: subjects.length
    };
  }

  // ================= MINIMAL SPEC-COMPLIANT QR CODE SVG ENCODER =================
  // Byte mode, ECC Level L, Versions 1..22 (up to 970 bytes) -> crisp crisp SVG
  const QR_TOTAL_CW = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258];
  const QR_ECC_CW = [0, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28];
  const QR_BLOCKS = [0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9];
  const QR_ALIGN = [
    [], [], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34],
    [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62],
    [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82],
    [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98]
  ];

  const GF_EXP = new Uint8Array(512);
  const GF_LOG = new Uint8Array(256);
  (function initGalois() {
    let x = 1;
    for (let i = 0; i < 255; i += 1) {
      GF_EXP[i] = x;
      GF_LOG[x] = i;
      x <<= 1;
      if (x & 0x100) x ^= 0x11d;
    }
    for (let i = 255; i < 512; i += 1) GF_EXP[i] = GF_EXP[i - 255];
  })();

  function gfMul(a, b) {
    if (a === 0 || b === 0) return 0;
    return GF_EXP[GF_LOG[a] + GF_LOG[b]];
  }

  function rsGenerator(degree) {
    let poly = [1];
    for (let i = 0; i < degree; i += 1) {
      const next = new Array(poly.length + 1).fill(0);
      const factor = GF_EXP[i];
      for (let j = 0; j < poly.length; j += 1) {
        next[j] ^= poly[j];
        next[j + 1] ^= gfMul(poly[j], factor);
      }
      poly = next;
    }
    return poly;
  }

  function rsRemainder(data, ecLen) {
    const gen = rsGenerator(ecLen);
    const res = new Uint8Array(data.length + ecLen);
    res.set(data);
    for (let i = 0; i < data.length; i += 1) {
      const coef = res[i];
      if (coef !== 0) {
        for (let j = 0; j < gen.length; j += 1) {
          res[i + j] ^= gfMul(gen[j], coef);
        }
      }
    }
    return res.slice(data.length);
  }

  function pickQrVersion(byteLen) {
    for (let v = 1; v <= 22; v += 1) {
      const dataCap = QR_TOTAL_CW[v] - QR_ECC_CW[v] * QR_BLOCKS[v];
      const headerBits = 4 + (v >= 10 ? 16 : 8);
      const availBytes = Math.floor((dataCap * 8 - headerBits) / 8);
      if (byteLen <= availBytes) return v;
    }
    return 0;
  }

  function encodeQrMatrix(text) {
    const rawBytes = new TextEncoder().encode(String(text || ''));
    const ver = pickQrVersion(rawBytes.length);
    if (!ver) return null;

    const totalCw = QR_TOTAL_CW[ver];
    const ecPerBlock = QR_ECC_CW[ver];
    const numBlocks = QR_BLOCKS[ver];
    const dataCw = totalCw - ecPerBlock * numBlocks;

    const bits = [];
    const pushBits = (val, len) => {
      for (let i = len - 1; i >= 0; i -= 1) bits.push((val >>> i) & 1);
    };
    pushBits(0b0100, 4);
    pushBits(rawBytes.length, ver >= 10 ? 16 : 8);
    for (let i = 0; i < rawBytes.length; i += 1) pushBits(rawBytes[i], 8);
    const maxBits = dataCw * 8;
    for (let i = 0; i < 4 && bits.length < maxBits; i += 1) bits.push(0);
    while (bits.length % 8 !== 0) bits.push(0);
    let padToggle = 0;
    while (bits.length < maxBits) {
      pushBits(padToggle ? 0x11 : 0xec, 8);
      padToggle ^= 1;
    }

    const dataBytes = new Uint8Array(dataCw);
    for (let i = 0; i < dataCw; i += 1) {
      let b = 0;
      for (let j = 0; j < 8; j += 1) b = (b << 1) | bits[i * 8 + j];
      dataBytes[i] = b;
    }

    const shortBlockLen = Math.floor(dataCw / numBlocks);
    const longBlocks = dataCw % numBlocks;
    const dataBlocks = [];
    const ecBlocks = [];
    let offset = 0;
    for (let b = 0; b < numBlocks; b += 1) {
      const len = shortBlockLen + (b >= numBlocks - longBlocks ? 1 : 0);
      const slice = dataBytes.slice(offset, offset + len);
      offset += len;
      dataBlocks.push(slice);
      ecBlocks.push(rsRemainder(slice, ecPerBlock));
    }

    const finalCw = [];
    const maxDataLen = shortBlockLen + (longBlocks > 0 ? 1 : 0);
    for (let i = 0; i < maxDataLen; i += 1) {
      for (let b = 0; b < numBlocks; b += 1) {
        if (i < dataBlocks[b].length) finalCw.push(dataBlocks[b][i]);
      }
    }
    for (let i = 0; i < ecPerBlock; i += 1) {
      for (let b = 0; b < numBlocks; b += 1) {
        finalCw.push(ecBlocks[b][i]);
      }
    }

    const size = ver * 4 + 17;
    const mod = Array.from({ length: size }, () => new Int8Array(size));
    const isFunc = Array.from({ length: size }, () => new Uint8Array(size));

    const setFunc = (r, c, val) => {
      if (r >= 0 && r < size && c >= 0 && c < size) {
        mod[r][c] = val ? 1 : 0;
        isFunc[r][c] = 1;
      }
    };

    const drawFinder = (r0, c0) => {
      for (let dr = -1; dr <= 7; dr += 1) {
        for (let dc = -1; dc <= 7; dc += 1) {
          const r = r0 + dr;
          const c = c0 + dc;
          if (r < 0 || r >= size || c < 0 || c >= size) continue;
          const on =
            dr >= 0 && dr <= 6 && dc >= 0 && dc <= 6 &&
            (dr === 0 || dr === 6 || dc === 0 || dc === 6 || (dr >= 2 && dr <= 4 && dc >= 2 && dc <= 4));
          setFunc(r, c, on);
        }
      }
    };
    drawFinder(0, 0);
    drawFinder(0, size - 7);
    drawFinder(size - 7, 0);

    for (let i = 8; i < size - 8; i += 1) {
      setFunc(6, i, i % 2 === 0);
      setFunc(i, 6, i % 2 === 0);
    }

    const aligns = QR_ALIGN[ver] || [];
    for (let i = 0; i < aligns.length; i += 1) {
      for (let j = 0; j < aligns.length; j += 1) {
        if (
          (i === 0 && j === 0) ||
          (i === 0 && j === aligns.length - 1) ||
          (i === aligns.length - 1 && j === 0)
        ) {
          continue;
        }
        const r = aligns[i];
        const c = aligns[j];
        for (let dr = -2; dr <= 2; dr += 1) {
          for (let dc = -2; dc <= 2; dc += 1) {
            const on = Math.abs(dr) === 2 || Math.abs(dc) === 2 || (dr === 0 && dc === 0);
            setFunc(r + dr, c + dc, on);
          }
        }
      }
    }

    // Reserve format info + dark module
    for (let i = 0; i < 9; i += 1) {
      if (i !== 6) {
        setFunc(8, i, 0);
        setFunc(i, 8, 0);
      }
    }
    for (let i = 0; i < 8; i += 1) {
      setFunc(8, size - 1 - i, 0);
      if (i < 7) setFunc(size - 1 - i, 8, 0);
    }
    setFunc(size - 8, 8, 1);

    // Reserve version info for ver >= 7
    if (ver >= 7) {
      let rem = ver;
      for (let i = 0; i < 12; i += 1) rem = (rem << 1) ^ ((rem >>> 11) * 0x1f25);
      const vBits = (ver << 12) | rem;
      for (let i = 0; i < 18; i += 1) {
        const bit = (vBits >>> i) & 1;
        const a = size - 11 + (i % 3);
        const b = Math.floor(i / 3);
        setFunc(a, b, bit);
        setFunc(b, a, bit);
      }
    }

    // Place data bits (mask 0: (r + c) % 2 === 0)
    let bitIdx = 0;
    const totalBits = finalCw.length * 8;
    let up = true;
    for (let right = size - 1; right >= 1; right -= 2) {
      if (right === 6) right = 5;
      for (let step = 0; step < size; step += 1) {
        const r = up ? size - 1 - step : step;
        for (let k = 0; k < 2; k += 1) {
          const c = right - k;
          if (isFunc[r][c]) continue;
          let bit = 0;
          if (bitIdx < totalBits) {
            bit = (finalCw[bitIdx >> 3] >>> (7 - (bitIdx & 7))) & 1;
            bitIdx += 1;
          }
          if ((r + c) % 2 === 0) bit ^= 1;
          mod[r][c] = bit;
        }
      }
      up = !up;
    }

    // Format info for ECC Level L (01) and Mask 0 (000) -> data = 0b01000 = 8
    // ISO 18004: bit 14 (MSB) at (8,0) .. bit 0 (LSB) at (0,8)
    const fmtData = 8;
    let fRem = fmtData;
    for (let i = 0; i < 10; i += 1) fRem = (fRem << 1) ^ ((fRem >>> 9) * 0x537);
    const fmtBits = ((fmtData << 10) | fRem) ^ 0x5412;
    const fmtBit = (idx) => (fmtBits >>> idx) & 1;

    // Top-left around finder: bits 14..0
    for (let i = 0; i <= 5; i += 1) setFunc(8, i, fmtBit(14 - i));
    setFunc(8, 7, fmtBit(8));
    setFunc(8, 8, fmtBit(7));
    setFunc(7, 8, fmtBit(6));
    for (let i = 0; i <= 5; i += 1) setFunc(5 - i, 8, fmtBit(5 - i));

    // Bottom-left (bits 14..8) and top-right (bits 7..0)
    for (let i = 0; i < 7; i += 1) setFunc(size - 1 - i, 8, fmtBit(14 - i));
    for (let i = 0; i < 8; i += 1) setFunc(8, size - 8 + i, fmtBit(7 - i));

    return { size, mod };
  }

  function generateQrSvg(text) {
    const qr = encodeQrMatrix(text);
    if (!qr) return null;
    const quiet = 3;
    const total = qr.size + quiet * 2;
    let d = '';
    for (let r = 0; r < qr.size; r += 1) {
      for (let c = 0; c < qr.size; c += 1) {
        if (qr.mod[r][c]) {
          d += `M${c + quiet},${r + quiet}h1v1h-1z`;
        }
      }
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${total} ${total}" shape-rendering="crispEdges" role="img" aria-label="Mã QR chuyển tiến độ"><rect width="${total}" height="${total}" fill="#ffffff"/><path d="${d}" fill="#0f172a"/></svg>`;
  }

  // ================= OPTIONAL SUPABASE CLOUD SYNC =================
  function loadSupabaseConfig(storage) {
    const store = storage || (typeof global.localStorage !== 'undefined' ? global.localStorage : null);
    if (!store) return { url: '', key: '', syncId: '' };
    const cfg = safeParseJson(store.getItem(SUPA_CFG_KEY)) || {};
    return {
      url: String(cfg.url || ''),
      key: String(cfg.key || ''),
      syncId: String(cfg.syncId || '')
    };
  }

  function saveSupabaseConfig(cfg, storage) {
    const store = storage || (typeof global.localStorage !== 'undefined' ? global.localStorage : null);
    if (!store) return;
    const normalized = {
      url: String((cfg && cfg.url) || '').trim().replace(/\/+$/, ''),
      key: String((cfg && cfg.key) || '').trim(),
      syncId: String((cfg && cfg.syncId) || '').trim()
    };
    store.setItem(SUPA_CFG_KEY, JSON.stringify(normalized));
    return normalized;
  }

  function validateSupaInputs(url, key, syncId) {
    const cleanUrl = String(url || '').trim().replace(/\/+$/, '');
    const cleanKey = String(key || '').trim();
    const cleanId = String(syncId || '').trim();
    if (!/^https:\/\/.+\.supabase\.co$/i.test(cleanUrl) && !/^https?:\/\/.+/i.test(cleanUrl)) {
      throw new Error('Supabase URL không hợp lệ (VD: https://xyz.supabase.co).');
    }
    if (!cleanKey) throw new Error('Vui lòng nhập Supabase Anon Key.');
    if (!cleanId || cleanId.length < 3) throw new Error('Mã hồ sơ (Sync ID) cần tối thiểu 3 ký tự (VD: hoangkol-2026).');
    return { cleanUrl, cleanKey, cleanId };
  }

  async function supabasePush(url, key, syncId, payload) {
    const { cleanUrl, cleanKey, cleanId } = validateSupaInputs(url, key, syncId);
    const endpoint = `${cleanUrl}/rest/v1/khys_sync_profiles?on_conflict=sync_id`;
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        apikey: cleanKey,
        Authorization: `Bearer ${cleanKey}`,
        'Content-Type': 'application/json',
        Prefer: 'resolution=merge-duplicates,return=representation'
      },
      body: JSON.stringify({
        sync_id: cleanId,
        payload,
        updated_at: new Date().toISOString()
      })
    });
    if (!res.ok) {
      const txt = await res.text();
      throw new Error(`Supabase trả lỗi ${res.status}: ${txt.slice(0, 180)}`);
    }
    return { syncId: cleanId, pushedAt: new Date().toISOString() };
  }

  async function supabasePull(url, key, syncId) {
    const { cleanUrl, cleanKey, cleanId } = validateSupaInputs(url, key, syncId);
    const endpoint = `${cleanUrl}/rest/v1/khys_sync_profiles?sync_id=eq.${encodeURIComponent(cleanId)}&select=payload,updated_at&limit=1`;
    const res = await fetch(endpoint, {
      method: 'GET',
      headers: {
        apikey: cleanKey,
        Authorization: `Bearer ${cleanKey}`
      }
    });
    if (!res.ok) {
      const txt = await res.text();
      throw new Error(`Supabase trả lỗi ${res.status}: ${txt.slice(0, 180)}`);
    }
    const rows = await res.json();
    if (!Array.isArray(rows) || rows.length === 0 || !rows[0].payload) {
      throw new Error(`Chưa có dữ liệu nào trên Cloud với mã hồ sơ "${cleanId}". Hãy đẩy từ máy kia lên trước.`);
    }
    return {
      payload: normalizeIncomingPayload(rows[0].payload),
      updatedAt: rows[0].updated_at || null
    };
  }

  global.PortalSync = {
    SUPABASE_SETUP_SQL,
    collectExportPayload,
    normalizeIncomingPayload,
    encodeTransferCode,
    decodeTransferCode,
    previewImportPayload,
    applyImportPayload,
    generateQrSvg,
    loadSupabaseConfig,
    saveSupabaseConfig,
    supabasePush,
    supabasePull
  };
})(typeof window !== 'undefined' ? window : globalThis);

// ==========================================================================
// PORTAL REMINDERS — HỆ THỐNG NHẮC HỌC THÔNG MINH THEO TIẾN ĐỘ & TIẾP XÚC
// Phân tích: Tiến độ bài học, Độ chính xác, Thời gian tiếp xúc, Giờ vàng học tập
// Hỗ trợ: Browser Notification / PWA Service Worker, In-App Toast & Lịch .ics
// ==========================================================================

(function (global) {
  'use strict';

  const REMINDER_CFG_KEY = 'yds_portal_reminder_cfg_v1';

  const DEFAULT_CFG = {
    enabled: false,
    timingMode: 'adaptive', // 'adaptive' | 'fixed'
    fixedTime: '20:00',
    morningTime: '08:30',
    frequency: 'once', // 'once' | 'twice' | 'smart3h'
    lastNotifiedAt: null,
    lastNotifiedDate: null,
    lastNotifiedSlot: null,
    snoozedUntil: null
  };

  function safeParse(raw) {
    if (!raw || typeof raw !== 'string') return null;
    try {
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === 'object' ? parsed : null;
    } catch (e) {
      return null;
    }
  }

  function loadReminderConfig(storage) {
    const store = storage || (typeof global.localStorage !== 'undefined' ? global.localStorage : null);
    if (!store) return { ...DEFAULT_CFG };
    const saved = safeParse(store.getItem(REMINDER_CFG_KEY));
    if (!saved) return { ...DEFAULT_CFG };
    return {
      ...DEFAULT_CFG,
      ...saved,
      enabled: Boolean(saved.enabled),
      timingMode: saved.timingMode === 'fixed' ? 'fixed' : 'adaptive',
      fixedTime: /^\d{2}:\d{2}$/.test(String(saved.fixedTime || '')) ? saved.fixedTime : '20:00',
      morningTime: /^\d{2}:\d{2}$/.test(String(saved.morningTime || '')) ? saved.morningTime : '08:30',
      frequency: ['once', 'twice', 'smart3h'].includes(saved.frequency) ? saved.frequency : 'once'
    };
  }

  function saveReminderConfig(cfg, storage) {
    const store = storage || (typeof global.localStorage !== 'undefined' ? global.localStorage : null);
    const merged = { ...loadReminderConfig(store), ...(cfg || {}) };
    if (store) {
      try {
        store.setItem(REMINDER_CFG_KEY, JSON.stringify(merged));
      } catch (e) {}
    }
    return merged;
  }

  function formatDurationShort(totalSeconds) {
    const secs = Math.max(0, Math.round(Number(totalSeconds || 0)));
    if (secs < 60) return `${secs} giây`;
    const mins = Math.round(secs / 60);
    if (mins < 60) return `${mins} phút`;
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return m > 0 ? `${h}g ${m}p` : `${h} giờ`;
  }

  function detectPreferredStudyHour(activity) {
    const hours = (activity && activity.preferredHours) || {};
    let bestHour = 20;
    let bestWeight = 0;
    let totalWeight = 0;

    Object.keys(hours).forEach((hStr) => {
      const h = Number(hStr);
      const w = Number(hours[hStr] || 0);
      if (Number.isInteger(h) && h >= 0 && h <= 23 && w > 0) {
        totalWeight += w;
        if (w > bestWeight) {
          bestWeight = w;
          bestHour = h;
        }
      }
    });

    const isLearned = totalWeight >= 120;
    const hh = String(isLearned ? bestHour : 20).padStart(2, '0');
    return {
      hour: isLearned ? bestHour : 20,
      label: `${hh}:00`,
      isLearned
    };
  }

  function parseTimeMinutes(hhmm) {
    const [h, m] = String(hhmm || '20:00').split(':').map(Number);
    return (Number.isFinite(h) ? h : 20) * 60 + (Number.isFinite(m) ? m : 0);
  }

  function computeDaysSince(isoStr, nowDate) {
    if (!isoStr) return null;
    const t = Date.parse(isoStr);
    if (!Number.isFinite(t)) return null;
    const nowMs = (nowDate || new Date()).getTime();
    const diffDays = Math.floor((nowMs - t) / (1000 * 60 * 60 * 24));
    return Math.max(0, diffDays);
  }

  function buildSmartRecommendation(snapshots, streakStats, activity, nowDate) {
    const now = nowDate || new Date();
    const list = Array.isArray(snapshots) ? snapshots : [];
    const stats = streakStats || {
      todayAnswered: 0,
      dailyGoal: 20,
      todayStudyMinutes: 0,
      dailyMinutesGoal: 30,
      currentStreak: 0
    };
    const exposureMap = (activity && activity.subjectExposure) || {};
    const preferred = detectPreferredStudyHour(activity);

    const enriched = list.map((item) => {
      const subj = item.subject;
      const prog = item.progress || {};
      const exp = exposureMap[subj.slug] || { totalSeconds: 0, lastStudiedAt: null };
      const daysSince = computeDaysSince(exp.lastStudiedAt, now);
      const exposureSeconds = Number(exp.totalSeconds || 0);

      let priority = 0;
      if (prog.status !== 'completed') {
        if (prog.status === 'in-progress') priority += 40;
        if (prog.answeredQuestions > 0 && prog.accuracy < 75) priority += (75 - prog.accuracy) * 1.4;
        if (daysSince !== null && daysSince >= 3) priority += Math.min(35, daysSince * 6);
        if (prog.status === 'not-started' && subj.category === 'co-so') priority += 22;
        if (exposureSeconds < 300) priority += 10;
        priority += (100 - (prog.percent || 0)) * 0.25;
      } else {
        priority = -50;
      }

      return {
        subject: subj,
        progress: prog,
        exposureSeconds,
        exposureLabel: formatDurationShort(exposureSeconds),
        daysSince,
        priority
      };
    });

    enriched.sort((a, b) => b.priority - a.priority);
    const pick = enriched[0] || null;
    const targetSubj = pick ? pick.subject : null;
    const targetProg = pick ? pick.progress : {};

    const remainingQ = Math.max(0, (stats.dailyGoal || 20) - (stats.todayAnswered || 0));
    const remainingMin = Math.max(0, (stats.dailyMinutesGoal || 30) - (stats.todayStudyMinutes || 0));
    const goalDone = remainingQ === 0 && (stats.todayStudyMinutes || 0) >= (stats.dailyMinutesGoal || 30);

    let urgency = 'daily-goal';
    let notifTitle = '📚 KHYS 2026: Đến giờ ôn tập rồi!';
    let headline = 'Duy trì nhịp độ ôn tập hôm nay';
    let body = '';
    const reasons = [];

    if (!targetSubj) {
      return {
        urgency: 'daily-goal',
        notifTitle,
        headline,
        body: 'Chọn một môn học để bắt đầu ôn tập.',
        reasons: [],
        ctaLabel: 'Mở cổng ôn tập →',
        ctaHref: './',
        targetSlug: null,
        preferredHour: preferred,
        enriched
      };
    }

    if (stats.currentStreak > 0 && (stats.todayAnswered || 0) === 0) {
      urgency = 'streak-risk';
      notifTitle = `🔥 Giữ chuỗi ${stats.currentStreak} ngày • ${targetSubj.shortName}`;
      headline = `Bảo vệ chuỗi ${stats.currentStreak} ngày liên tiếp!`;
      body = `Hôm nay bạn chưa làm câu nào. Chỉ cần ${Math.min(10, stats.dailyGoal)}–${stats.dailyGoal} câu ở môn ${targetSubj.shortName} là giữ vững Streak.`;
      reasons.push(`Chuỗi hiện tại: ${stats.currentStreak} ngày — chưa ghi nhận câu mới hôm nay`);
    } else if (goalDone) {
      urgency = 'done';
      notifTitle = `🏆 Đạt mục tiêu hôm nay! (${stats.todayAnswered} câu • ${stats.todayStudyMinutes}p)`;
      headline = 'Đã hoàn thành xuất sắc mục tiêu hôm nay!';
      body = `Bạn đã làm ${stats.todayAnswered}/${stats.dailyGoal} câu (${stats.todayStudyMinutes} phút tiếp xúc). Có thể nghỉ ngơi hoặc ôn nhẹ ${targetSubj.shortName}.`;
      reasons.push(`Hôm nay: ${stats.todayAnswered}/${stats.dailyGoal} câu • ${stats.todayStudyMinutes}/${stats.dailyMinutesGoal} phút`);
    } else if (pick.daysSince !== null && pick.daysSince >= 3 && targetProg.status !== 'completed') {
      urgency = 'spaced-review';
      notifTitle = `⏳ Đã ${pick.daysSince} ngày chưa chạm ${targetSubj.shortName}`;
      headline = `Ôn lại ${targetSubj.name} để chống quên`;
      body = `Bạn đã ${pick.daysSince} ngày chưa mở ${targetSubj.shortName} (${targetProg.completedLessons}/${targetProg.totalLessons} bài). Dành ${Math.max(10, remainingMin)} phút ôn tiếp nhé!`;
      reasons.push(`Cách lần tiếp xúc gần nhất: ${pick.daysSince} ngày`);
    } else if (targetProg.answeredQuestions > 0 && targetProg.accuracy < 75) {
      urgency = 'reinforce';
      notifTitle = `🎯 Củng cố ${targetSubj.shortName} (Đúng ${targetProg.accuracy}%)`;
      headline = `Cải thiện độ chính xác môn ${targetSubj.name}`;
      body = `Độ chính xác hiện tại đang ở ${targetProg.accuracy}% (${targetProg.correctQuestions}/${targetProg.answeredQuestions} câu). Xem lại Atlas/Giải thích và làm thêm ${remainingQ || 10} câu nhé!`;
      reasons.push(`Độ chính xác ${targetSubj.shortName}: ${targetProg.accuracy}% (< 75%)`);
    } else {
      urgency = 'daily-goal';
      notifTitle = `📖 Nhắc ôn ${targetSubj.shortName} • Còn ${remainingQ} câu mục tiêu`;
      headline = `Tiếp tục trọng tâm: ${targetSubj.name}`;
      body = remainingQ > 0
        ? `Hôm nay đã làm ${stats.todayAnswered}/${stats.dailyGoal} câu (${stats.todayStudyMinutes} phút). Còn ${remainingQ} câu nữa để chốt mục tiêu ngày!`
        : `Đã đạt ${stats.todayAnswered} câu! Học thêm ${remainingMin} phút đọc lý thuyết/Atlas ở ${targetSubj.shortName} để đủ ${stats.dailyMinutesGoal} phút/ngày.`;
      reasons.push(`Mục tiêu hôm nay: ${stats.todayAnswered}/${stats.dailyGoal} câu • ${stats.todayStudyMinutes}/${stats.dailyMinutesGoal} phút`);
    }

    if (pick.exposureSeconds > 0) {
      reasons.push(`Thời gian tiếp xúc ${targetSubj.shortName}: ${pick.exposureLabel}`);
    } else {
      reasons.push(`Chưa có thời gian tiếp xúc ở ${targetSubj.shortName} — rất phù hợp để bắt đầu`);
    }
    reasons.push(
      preferred.isLearned
        ? `Giờ vàng học tập phát hiện được: khoảng ${preferred.label}`
        : `Khung giờ nhắc mặc định: ${preferred.label} (sẽ tự học theo thói quen của bạn)`
    );

    return {
      urgency,
      notifTitle,
      headline,
      body,
      reasons,
      ctaLabel: targetProg.status === 'in-progress' ? `Ôn tiếp ${targetSubj.shortName} →` : `Bắt đầu ${targetSubj.shortName} →`,
      ctaHref: targetSubj.href,
      targetSlug: targetSubj.slug,
      preferredHour: preferred,
      enriched
    };
  }

  function shouldTriggerReminder(cfg, streakStats, activity, nowDate) {
    if (!cfg || !cfg.enabled) return { should: false, slot: null };
    const now = nowDate || new Date();
    const nowMs = now.getTime();

    if (cfg.snoozedUntil && Date.parse(cfg.snoozedUntil) > nowMs) {
      return { should: false, slot: null };
    }

    const stats = streakStats || {};
    if (
      (stats.todayAnswered || 0) >= (stats.dailyGoal || 20) &&
      (stats.todayStudyMinutes || 0) >= (stats.dailyMinutesGoal || 30)
    ) {
      return { should: false, slot: null };
    }

    const todayKey = stats.todayKey || `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    const nowMinutes = now.getHours() * 60 + now.getMinutes();

    const preferred = detectPreferredStudyHour(activity);
    const mainMinutes = cfg.timingMode === 'adaptive'
      ? preferred.hour * 60
      : parseTimeMinutes(cfg.fixedTime);
    const morningMinutes = parseTimeMinutes(cfg.morningTime || '08:30');

    if (cfg.frequency === 'once') {
      if (nowMinutes >= mainMinutes && cfg.lastNotifiedDate !== todayKey) {
        return { should: true, slot: 'main' };
      }
      return { should: false, slot: null };
    }

    if (cfg.frequency === 'twice') {
      if (nowMinutes >= mainMinutes && !(cfg.lastNotifiedDate === todayKey && cfg.lastNotifiedSlot === 'evening')) {
        return { should: true, slot: 'evening' };
      }
      if (
        nowMinutes >= morningMinutes &&
        nowMinutes < mainMinutes &&
        !(cfg.lastNotifiedDate === todayKey && (cfg.lastNotifiedSlot === 'morning' || cfg.lastNotifiedSlot === 'evening'))
      ) {
        return { should: true, slot: 'morning' };
      }
      return { should: false, slot: null };
    }

    // smart3h: after 08:30, remind at most once every 3 hours while daily goal unmet
    if (nowMinutes >= morningMinutes) {
      const lastMs = cfg.lastNotifiedAt ? Date.parse(cfg.lastNotifiedAt) : 0;
      if (!lastMs || nowMs - lastMs >= 3 * 60 * 60 * 1000) {
        return { should: true, slot: `smart-${now.getHours()}` };
      }
    }
    return { should: false, slot: null };
  }

  function getPermissionState() {
    if (typeof Notification === 'undefined') return 'unsupported';
    return Notification.permission;
  }

  async function requestNotificationPermission() {
    if (typeof Notification === 'undefined') return 'unsupported';
    if (Notification.permission === 'granted') return 'granted';
    return Notification.requestPermission();
  }

  async function sendBrowserNotification(rec) {
    if (!rec || typeof Notification === 'undefined' || Notification.permission !== 'granted') {
      return false;
    }
    const options = {
      body: rec.body,
      icon: './icons/icon-192.png',
      badge: './icons/icon-192.png',
      tag: 'khys-study-reminder',
      renotify: true,
      data: { url: rec.ctaHref || './' }
    };

    try {
      if ('serviceWorker' in navigator) {
        const reg = await navigator.serviceWorker.getRegistration();
        if (reg && typeof reg.showNotification === 'function') {
          await reg.showNotification(rec.notifTitle, options);
          return true;
        }
      }
    } catch (e) {}

    try {
      const n = new Notification(rec.notifTitle, options);
      n.onclick = () => {
        try { window.focus(); } catch (e) {}
        if (rec.ctaHref && rec.ctaHref !== './') {
          window.location.href = rec.ctaHref;
        }
        n.close();
      };
      return true;
    } catch (e) {
      return false;
    }
  }

  function padIcs(num) {
    return String(num).padStart(2, '0');
  }

  function generateCalendarIcs(cfg, rec, portalUrl, activity) {
    const now = new Date();
    const preferred = detectPreferredStudyHour(activity);
    const targetHHMM = cfg && cfg.timingMode === 'fixed' ? cfg.fixedTime : preferred.label;
    const [hh, mm] = String(targetHHMM || '20:00').split(':').map((x) => Number(x) || 0);

    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hh, mm, 0);
    if (start.getTime() < now.getTime()) {
      start.setDate(start.getDate() + 1);
    }
    const end = new Date(start.getTime() + 30 * 60 * 1000);

    const fmtLocal = (d) =>
      `${d.getFullYear()}${padIcs(d.getMonth() + 1)}${padIcs(d.getDate())}T${padIcs(d.getHours())}${padIcs(d.getMinutes())}00`;
    const fmtUtc = (d) =>
      `${d.getUTCFullYear()}${padIcs(d.getUTCMonth() + 1)}${padIcs(d.getUTCDate())}T${padIcs(d.getUTCHours())}${padIcs(d.getUTCMinutes())}${padIcs(d.getUTCSeconds())}Z`;

    const url = portalUrl || 'https://hoangkol.github.io/on-tap-khys-sdh-2026/';
    const summary = 'Ôn tập Cao học KHYS YDS 2026';
    const desc = `${(rec && rec.headline) || 'Đến giờ ôn tập'} — Mở cổng ôn tập: ${url}`.replace(/\r?\n/g, ' ');

    return [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//KHYS YDS 2026//Smart Study Reminder//VI',
      'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT',
      `UID:khys-yds-2026-daily-${now.getTime()}@hoangkol`,
      `DTSTAMP:${fmtUtc(now)}`,
      `DTSTART:${fmtLocal(start)}`,
      `DTEND:${fmtLocal(end)}`,
      'RRULE:FREQ=DAILY',
      `SUMMARY:${summary}`,
      `DESCRIPTION:${desc}`,
      `URL:${url}`,
      'BEGIN:VALARM',
      'TRIGGER:-PT0M',
      'ACTION:DISPLAY',
      `DESCRIPTION:${summary}`,
      'END:VALARM',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');
  }

  global.PortalReminders = {
    loadReminderConfig,
    saveReminderConfig,
    formatDurationShort,
    detectPreferredStudyHour,
    buildSmartRecommendation,
    shouldTriggerReminder,
    getPermissionState,
    requestNotificationPermission,
    sendBrowserNotification,
    generateCalendarIcs
  };
})(typeof window !== 'undefined' ? window : globalThis);

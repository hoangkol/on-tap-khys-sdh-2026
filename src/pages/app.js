// ==========================================================================
// PORTAL MENU CONTROLLER — CỔNG ÔN TẬP KHYS SĐH 2026 (YDS / UMP)
// ==========================================================================

(function () {
  'use strict';

  const META = window.PORTAL_META || { portalThemeKey: 'yds_portal_theme' };
  const SUBJECTS = window.PORTAL_SUBJECTS || [];
  const readProgress = window.readSubjectProgress;
  const readActivity = window.readPortalActivity;
  const computeStreak = window.computeStreakStats;
  const saveDailyGoal = window.setPortalDailyGoal;
  const SYNC = window.PortalSync || null;
  const ANALYTICS_COLLAPSED_KEY = 'yds_portal_analytics_collapsed';

  const state = {
    theme: 'light',
    filter: 'all',
    search: '',
    analyticsCollapsed: false,
    syncTab: 'transfer',
    pendingPayload: null,
    generatedCode: '',
    generatedLink: ''
  };

  function safeGetStorage(key) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function safeSetStorage(key, value) {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch (e) {
      return false;
    }
  }

  function escapeHtml(text) {
    return String(text || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function formatNumber(n) {
    return Number(n || 0).toLocaleString('vi-VN');
  }

  function applyTheme(nextTheme) {
    state.theme = nextTheme === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', state.theme);
    safeSetStorage(META.portalThemeKey, state.theme);

    const btn = document.getElementById('btnThemeToggle');
    if (btn) {
      btn.innerHTML = state.theme === 'dark'
        ? '☀️ <span class="hide-xs">Giao diện sáng</span>'
        : '🌙 <span class="hide-xs">Giao diện tối</span>';
    }
  }

  function syncThemeAcrossModules() {
    let syncedCount = 0;
    SUBJECTS.forEach((subject) => {
      if (safeSetStorage(subject.themeKey, state.theme)) {
        syncedCount += 1;
      }
    });
    const btn = document.getElementById('btnSyncTheme');
    if (btn) {
      const original = '🎨 <span class="hide-xs">Đồng bộ theme 7 môn</span>';
      btn.innerHTML = syncedCount > 0
        ? `✓ <span class="hide-xs">Đã đồng bộ (${syncedCount} môn)</span>`
        : '⚠️ <span class="hide-xs">Trình duyệt chặn lưu</span>';
      setTimeout(() => {
        btn.innerHTML = original;
      }, 1800);
    }
  }

  function getSnapshots() {
    return SUBJECTS.map((subject) => ({
      subject,
      progress: readProgress ? readProgress(subject) : {
        completedLessons: 0,
        masteredLessons: 0,
        totalLessons: subject.lessonsCount,
        answeredQuestions: 0,
        correctQuestions: 0,
        totalQuestions: subject.questionsCount,
        percent: 0,
        accuracy: 0,
        masteryPercent: 0,
        status: 'not-started'
      }
    }));
  }

  function getAccuracyTone(accuracy, answered) {
    if (!answered) return 'acc-none';
    if (accuracy >= 80) return 'acc-high';
    if (accuracy >= 60) return 'acc-mid';
    return 'acc-low';
  }

  function renderSummary(snapshots, streakStats) {
    const totalLessons = snapshots.reduce((acc, item) => acc + item.progress.totalLessons, 0);
    const totalQuestions = snapshots.reduce((acc, item) => acc + item.progress.totalQuestions, 0);
    const completedLessons = snapshots.reduce((acc, item) => acc + item.progress.completedLessons, 0);
    const masteredLessons = snapshots.reduce((acc, item) => acc + item.progress.masteredLessons, 0);
    const answeredQuestions = snapshots.reduce((acc, item) => acc + item.progress.answeredQuestions, 0);
    const correctQuestions = snapshots.reduce((acc, item) => acc + item.progress.correctQuestions, 0);
    const inProgressCount = snapshots.filter((item) => item.progress.status === 'in-progress').length;
    const completedCount = snapshots.filter((item) => item.progress.status === 'completed').length;

    const pct = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
    const overallAcc = answeredQuestions > 0 ? Math.round((correctQuestions / answeredQuestions) * 100) : 0;

    const elSubjects = document.getElementById('statTotalSubjects');
    const elCurriculum = document.getElementById('statTotalCurriculum');
    const elCompleted = document.getElementById('statCompletedLessons');
    const elFill = document.getElementById('statOverallFill');
    const elAnswered = document.getElementById('statAnsweredQuestions');
    const elAccuracy = document.getElementById('statAccuracyValue');
    const elAccuracyFill = document.getElementById('statAccuracyFill');
    const elMasteredMeta = document.getElementById('statMasteredMeta');
    const elStreak = document.getElementById('statStreakValue');
    const elGoalFill = document.getElementById('statGoalFill');
    const elTodayGoalMeta = document.getElementById('statTodayGoalMeta');
    const elInProgress = document.getElementById('inProgressCount');
    const elCompletedCount = document.getElementById('completedCount');

    if (elSubjects) elSubjects.textContent = `${SUBJECTS.length} môn`;
    if (elCurriculum) {
      elCurriculum.textContent = `${totalLessons} bài • ${formatNumber(totalQuestions)} câu KSA`;
    }
    if (elCompleted) {
      elCompleted.textContent = `${completedLessons} / ${totalLessons} bài (${pct}%)`;
    }
    if (elFill) elFill.style.width = `${pct}%`;
    if (elAnswered) {
      elAnswered.textContent = `${formatNumber(answeredQuestions)} / ${formatNumber(totalQuestions)} câu trắc nghiệm đã trả lời`;
    }
    if (elAccuracy) {
      elAccuracy.textContent = answeredQuestions > 0 ? `${overallAcc}% đúng` : 'Chưa làm bài';
    }
    if (elAccuracyFill) {
      elAccuracyFill.style.width = `${answeredQuestions > 0 ? overallAcc : 0}%`;
    }
    if (elMasteredMeta) {
      elMasteredMeta.textContent = `${formatNumber(correctQuestions)}/${formatNumber(answeredQuestions)} câu đúng • ${masteredLessons} bài đạt chuẩn (≥75%)`;
    }
    if (elStreak) {
      elStreak.textContent = `🔥 ${streakStats.currentStreak} ngày`;
    }
    if (elGoalFill) {
      elGoalFill.style.width = `${streakStats.goalPercent}%`;
    }
    if (elTodayGoalMeta) {
      elTodayGoalMeta.textContent = `Hôm nay: ${streakStats.todayAnswered}/${streakStats.dailyGoal} câu • Kỷ lục: ${streakStats.bestStreak} ngày`;
    }
    if (elInProgress) elInProgress.textContent = String(inProgressCount);
    if (elCompletedCount) elCompletedCount.textContent = String(completedCount);
  }

  function renderWeeklyChart(streakStats, totalAnsweredOverall) {
    const container = document.getElementById('weeklyChartContainer');
    const noteEl = document.getElementById('weeklySummaryNote');
    if (!container) return;

    const days = streakStats.last7Days || [];
    const maxCount = Math.max(streakStats.dailyGoal || 20, ...days.map((d) => d.answered), 10);
    const weekTotal = days.reduce((s, d) => s + d.answered, 0);
    const weekCorrect = days.reduce((s, d) => s + d.correct, 0);
    const weekAcc = weekTotal > 0 ? Math.round((weekCorrect / weekTotal) * 100) : 0;

    const width = 420;
    const height = 166;
    const padTop = 22;
    const padBottom = 34;
    const chartH = height - padTop - padBottom;
    const colWidth = width / days.length;
    const barW = 28;

    const goalY = padTop + chartH * (1 - Math.min(1, (streakStats.dailyGoal || 20) / maxCount));

    const barsSvg = days.map((day, idx) => {
      const cx = idx * colWidth + colWidth / 2;
      const x = cx - barW / 2;
      const totalH = day.answered > 0 ? Math.max(6, (day.answered / maxCount) * chartH) : 4;
      const correctH = day.correct > 0 ? Math.max(4, (day.correct / maxCount) * chartH) : 0;
      const yTotal = padTop + chartH - totalH;
      const yCorrect = padTop + chartH - correctH;
      const labelColor = day.isToday ? 'var(--primary)' : 'var(--text-light)';
      const valueText = day.answered > 0 ? String(day.answered) : '';

      return `
        <g class="chart-col">
          <title>${escapeHtml(day.shortDate)}: ${day.answered} câu đã làm (${day.correct} đúng${day.answered ? `, ${day.accuracy}%` : ''})</title>
          <rect x="${x}" y="${padTop}" width="${barW}" height="${chartH}" rx="7" fill="var(--chart-track)" />
          ${day.answered > 0
            ? `<rect x="${x}" y="${yTotal}" width="${barW}" height="${totalH}" rx="7" fill="var(--chart-answered)" />`
            : `<rect x="${x}" y="${padTop + chartH - 3}" width="${barW}" height="3" rx="1.5" fill="var(--border)" />`
          }
          ${correctH > 0
            ? `<rect x="${x}" y="${yCorrect}" width="${barW}" height="${correctH}" rx="7" fill="var(--chart-correct)" />`
            : ''
          }
          ${valueText
            ? `<text x="${cx}" y="${Math.max(13, yTotal - 5)}" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--text-main)">${valueText}</text>`
            : ''
          }
          <text x="${cx}" y="${height - 16}" text-anchor="middle" font-size="11" font-weight="${day.isToday ? '800' : '600'}" fill="${labelColor}">${escapeHtml(day.label)}</text>
          <text x="${cx}" y="${height - 4}" text-anchor="middle" font-size="9.5" fill="var(--text-light)">${escapeHtml(day.shortDate)}</text>
        </g>
      `;
    }).join('');

    container.innerHTML = `
      <svg class="weekly-chart-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Biểu đồ số câu trắc nghiệm đã làm trong 7 ngày gần nhất">
        <line x1="8" y1="${goalY.toFixed(1)}" x2="${width - 8}" y2="${goalY.toFixed(1)}" stroke="var(--primary)" stroke-opacity="0.38" stroke-dasharray="4 4" stroke-width="1.2" />
        ${barsSvg}
      </svg>
    `;

    if (noteEl) {
      if (weekTotal > 0) {
        noteEl.innerHTML = `7 ngày qua: <strong>${formatNumber(weekTotal)} câu</strong> (${formatNumber(weekCorrect)} đúng • <strong>${weekAcc}%</strong> chính xác) • Đường đứt nét = mục tiêu ${streakStats.dailyGoal} câu/ngày.`;
      } else if (totalAnsweredOverall > 0) {
        noteEl.textContent = `Bạn đã có ${formatNumber(totalAnsweredOverall)} câu từ trước. Làm thêm câu mới hôm nay để bắt đầu ghi nhận chuỗi Streak và biểu đồ 7 ngày!`;
      } else {
        noteEl.textContent = 'Hãy làm vài câu trắc nghiệm ở bất kỳ môn nào — biểu đồ nhịp độ 7 ngày và chuỗi Streak sẽ tự động cập nhật tại đây.';
      }
    }
  }

  function renderMasteryBreakdown(snapshots) {
    const listEl = document.getElementById('subjectMasteryList');
    const pillEl = document.getElementById('masteredOverviewPill');
    const focusEl = document.getElementById('nextFocusBox');

    const totalLessons = snapshots.reduce((s, x) => s + x.progress.totalLessons, 0);
    const totalMastered = snapshots.reduce((s, x) => s + x.progress.masteredLessons, 0);
    if (pillEl) {
      pillEl.textContent = `${totalMastered}/${totalLessons} bài đạt chuẩn (≥75%)`;
    }

    if (listEl) {
      listEl.innerHTML = snapshots.map(({ subject, progress }) => {
        const accBadge = progress.answeredQuestions > 0
          ? `<span class="acc-pill ${getAccuracyTone(progress.accuracy, progress.answeredQuestions)}">${progress.accuracy}% đúng</span>`
          : '<span class="acc-pill acc-none">Chưa làm</span>';

        return `
          <a class="mastery-row" href="${escapeHtml(subject.href)}" style="--row-accent: ${escapeHtml(subject.accent)};">
            <div class="mastery-row-top">
              <span class="mastery-name">
                <span class="mastery-dot" aria-hidden="true"></span>
                <span>${escapeHtml(subject.shortName)}</span>
              </span>
              <span class="mastery-metrics">
                <span>${progress.completedLessons}/${progress.totalLessons} bài</span>
                ${accBadge}
              </span>
            </div>
            <div class="mastery-track" aria-hidden="true">
              <div class="mastery-fill" style="width: ${progress.percent}%"></div>
            </div>
          </a>
        `;
      }).join('');
    }

    if (focusEl) {
      const inProg = snapshots
        .filter((x) => x.progress.status === 'in-progress')
        .sort((a, b) => a.progress.accuracy - b.progress.accuracy || a.progress.percent - b.progress.percent);
      const notStarted = snapshots.filter((x) => x.progress.status === 'not-started');
      const recommended = inProg[0] || notStarted[0] || snapshots[0];

      if (recommended) {
        const { subject, progress } = recommended;
        let reason;
        if (progress.status === 'in-progress') {
          reason = progress.accuracy < 75
            ? `Đang học dở (${progress.completedLessons}/${progress.totalLessons} bài, độ chính xác ${progress.accuracy}%) — nên củng cố ngay.`
            : `Đang tiến triển tốt (${progress.completedLessons}/${progress.totalLessons} bài, ${progress.accuracy}% đúng) — hoàn tất nốt môn này.`;
        } else if (progress.status === 'completed') {
          reason = 'Bạn đã hoàn thành toàn bộ 7 môn! Có thể vào phòng thi thử để tổng hợp kiến thức.';
        } else {
          reason = `Môn đề xuất bắt đầu (${subject.lessonsCount} bài • ${subject.questionsCount} câu KSA).`;
        }

        focusEl.innerHTML = `
          <div class="next-focus-info">
            <div class="next-focus-label">💡 Đề xuất ôn tập tiếp theo</div>
            <div class="next-focus-title">${escapeHtml(subject.name)}</div>
            <div class="next-focus-reason">${escapeHtml(reason)}</div>
          </div>
          <a class="btn-focus-go" href="${escapeHtml(subject.href)}">Vào ôn →</a>
        `;
      }
    }
  }

  function applyAnalyticsCollapsed(collapsed) {
    state.analyticsCollapsed = Boolean(collapsed);
    const body = document.getElementById('analyticsBody');
    const btn = document.getElementById('btnToggleAnalytics');
    if (body) body.classList.toggle('hidden', state.analyticsCollapsed);
    if (btn) {
      btn.textContent = state.analyticsCollapsed ? 'Mở rộng' : 'Thu gọn';
      btn.setAttribute('aria-expanded', String(!state.analyticsCollapsed));
    }
    safeSetStorage(ANALYTICS_COLLAPSED_KEY, state.analyticsCollapsed ? '1' : '0');
  }

  function matchesFilter(item) {
    const { subject, progress } = item;
    if (state.filter === 'co-so' && subject.category !== 'co-so') return false;
    if (state.filter === 'chuyen-nganh' && subject.category !== 'chuyen-nganh') return false;
    if (state.filter === 'in-progress' && progress.status !== 'in-progress') return false;
    if (state.filter === 'completed' && progress.status !== 'completed') return false;

    const q = state.search.trim().toLowerCase();
    if (!q) return true;
    const haystack = [
      subject.name,
      subject.shortName,
      subject.summary,
      subject.route,
      subject.keywords,
      ...(subject.highlights || [])
    ].join(' ').toLowerCase();
    return haystack.includes(q);
  }

  function renderCards() {
    const grid = document.getElementById('subjectsGrid');
    const emptyState = document.getElementById('emptyState');
    if (!grid) return;

    const snapshots = getSnapshots();
    const activity = readActivity ? readActivity() : { days: {}, dailyGoal: 20 };
    const streakStats = computeStreak
      ? computeStreak(activity)
      : { currentStreak: 0, bestStreak: 0, todayAnswered: 0, dailyGoal: 20, goalPercent: 0, last7Days: [] };

    const goalSelect = document.getElementById('dailyGoalSelect');
    if (goalSelect && streakStats.dailyGoal) {
      const valStr = String(streakStats.dailyGoal);
      if ([...goalSelect.options].some((o) => o.value === valStr)) {
        goalSelect.value = valStr;
      }
    }

    const totalAnsweredOverall = snapshots.reduce((s, item) => s + item.progress.answeredQuestions, 0);
    renderSummary(snapshots, streakStats);
    renderWeeklyChart(streakStats, totalAnsweredOverall);
    renderMasteryBreakdown(snapshots);

    const visible = snapshots.filter(matchesFilter);
    if (visible.length === 0) {
      grid.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
      return;
    }

    if (emptyState) emptyState.classList.add('hidden');
    grid.innerHTML = visible.map(({ subject, progress }) => {
      const chipsHtml = (subject.highlights || [])
        .map((chip) => `<span class="feature-chip">${escapeHtml(chip)}</span>`)
        .join('');

      const accTone = getAccuracyTone(progress.accuracy, progress.answeredQuestions);
      const accText = progress.answeredQuestions > 0
        ? `Đúng ${progress.accuracy}% (${formatNumber(progress.correctQuestions)}/${formatNumber(progress.answeredQuestions)})`
        : 'Chưa có câu trả lời';
      const masteredText = progress.masteredLessons > 0
        ? `Đạt chuẩn ≥75%: ${progress.masteredLessons} bài`
        : (progress.status === 'in-progress' ? 'Đang ôn tập' : 'Sẵn sàng bắt đầu');

      return `
        <article
          class="subject-card"
          style="--card-accent: ${escapeHtml(subject.accent)}; --card-accent-soft: ${escapeHtml(subject.accentSoft)};"
        >
          <div class="card-top">
            <div class="card-identity">
              <div class="subject-icon">${subject.iconSvg}</div>
              <div>
                <div class="card-badges">
                  <span class="cat-badge">${escapeHtml(subject.categoryLabel)}</span>
                  <span class="route-badge">${escapeHtml(subject.route)}</span>
                </div>
                <h2 class="subject-title">
                  <a href="${escapeHtml(subject.href)}">${escapeHtml(subject.name)}</a>
                </h2>
              </div>
            </div>
          </div>

          <p class="subject-summary">${escapeHtml(subject.summary)}</p>

          <div class="feature-chips">${chipsHtml}</div>

          <div class="card-progress">
            <div class="progress-row">
              <span>Tiến độ: <strong>${progress.completedLessons}/${progress.totalLessons} bài (${progress.percent}%)</strong></span>
              <span>${formatNumber(progress.answeredQuestions)}/${formatNumber(progress.totalQuestions)} câu</span>
            </div>
            <div class="card-track" aria-hidden="true">
              <div class="card-fill" style="width: ${progress.percent}%"></div>
            </div>
            <div class="progress-meta-row">
              <span class="acc-pill ${accTone}">${escapeHtml(accText)}</span>
              <span class="mastery-subtext">${escapeHtml(masteredText)}</span>
            </div>
          </div>

          <div class="card-actions">
            <a class="btn-enter" href="${escapeHtml(subject.href)}">
              <span>${progress.status === 'in-progress' ? 'Tiếp tục ôn môn này' : 'Vào học môn này'}</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>
      `;
    }).join('');
  }

  function bindEvents() {
    const btnTheme = document.getElementById('btnThemeToggle');
    if (btnTheme) {
      btnTheme.addEventListener('click', () => {
        applyTheme(state.theme === 'dark' ? 'light' : 'dark');
      });
    }

    const btnSync = document.getElementById('btnSyncTheme');
    if (btnSync) {
      btnSync.addEventListener('click', syncThemeAcrossModules);
    }

    const searchInput = document.getElementById('subjectSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.search = e.target.value || '';
        renderCards();
      });
    }

    document.querySelectorAll('.filter-pill').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.filter = btn.getAttribute('data-filter') || 'all';
        document.querySelectorAll('.filter-pill').forEach((other) => {
          other.classList.toggle('active', other === btn);
        });
        renderCards();
      });
    });

    const btnReset = document.getElementById('btnResetFilters');
    if (btnReset) {
      btnReset.addEventListener('click', () => {
        state.filter = 'all';
        state.search = '';
        if (searchInput) searchInput.value = '';
        document.querySelectorAll('.filter-pill').forEach((btn) => {
          btn.classList.toggle('active', btn.getAttribute('data-filter') === 'all');
        });
        renderCards();
      });
    }

    const goalSelect = document.getElementById('dailyGoalSelect');
    if (goalSelect) {
      goalSelect.addEventListener('change', (e) => {
        if (saveDailyGoal) {
          saveDailyGoal(e.target.value);
        }
        renderCards();
      });
    }

    const btnToggleAnalytics = document.getElementById('btnToggleAnalytics');
    if (btnToggleAnalytics) {
      btnToggleAnalytics.addEventListener('click', () => {
        applyAnalyticsCollapsed(!state.analyticsCollapsed);
      });
    }

    bindSyncModalEvents();

    window.addEventListener('storage', renderCards);
    window.addEventListener('pageshow', renderCards);
    window.addEventListener('focus', renderCards);
  }

  // ================= CROSS-DEVICE SYNC MODAL CONTROLLER =================
  function setSyncStatus(type, msg) {
    const banner = document.getElementById('syncStatusBanner');
    if (!banner) return;
    if (!msg) {
      banner.className = 'sync-status-banner hidden';
      banner.textContent = '';
      return;
    }
    banner.className = `sync-status-banner sync-status-${type || 'info'}`;
    banner.textContent = msg;
  }

  function switchSyncTab(tabName) {
    state.syncTab = tabName;
    document.querySelectorAll('.sync-tab').forEach((btn) => {
      const active = btn.getAttribute('data-sync-tab') === tabName;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-selected', String(active));
    });
    const panes = {
      transfer: document.getElementById('syncPaneTransfer'),
      file: document.getElementById('syncPaneFile'),
      cloud: document.getElementById('syncPaneCloud')
    };
    Object.keys(panes).forEach((k) => {
      if (panes[k]) panes[k].classList.toggle('hidden', k !== tabName || Boolean(state.pendingPayload));
    });
  }

  function showSyncPreview(payload, sourceLabel) {
    if (!SYNC) return;
    const preview = SYNC.previewImportPayload(payload);
    state.pendingPayload = payload;

    const previewPane = document.getElementById('syncPreviewPane');
    const summaryEl = document.getElementById('syncPreviewSummary');
    const tbody = document.getElementById('syncPreviewTbody');

    ['syncPaneTransfer', 'syncPaneFile', 'syncPaneCloud'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.classList.add('hidden');
    });
    if (previewPane) previewPane.classList.remove('hidden');

    let timeText = '';
    try {
      timeText = new Date(preview.exportedAt).toLocaleString('vi-VN');
    } catch (e) {
      timeText = preview.exportedAt;
    }

    if (summaryEl) {
      summaryEl.innerHTML = `${escapeHtml(sourceLabel || 'Dữ liệu nhận về')} (${escapeHtml(timeText)}) • <strong>${preview.incCompletedTotal} bài</strong> • <strong>${formatNumber(preview.incAnsweredTotal)} câu</strong> (Đúng ${preview.incAccuracy}%)${preview.incDaysCount ? ` • ${preview.incDaysCount} ngày Streak` : ''}`;
    }

    if (tbody) {
      tbody.innerHTML = preview.rows.map((r) => `
        <tr>
          <td>
            <span class="mastery-dot" style="background:${escapeHtml(r.accent)};margin-right:6px;"></span>
            <strong>${escapeHtml(r.shortName)}</strong>
          </td>
          <td>${r.curCompleted}/${r.totalLessons} bài • ${formatNumber(r.curAnswered)} câu</td>
          <td><strong>${r.incCompleted}/${r.totalLessons} bài</strong> • ${formatNumber(r.incAnswered)} câu ${r.incAnswered > 0 ? `(${r.incAccuracy}%)` : ''}</td>
        </tr>
      `).join('');
    }
  }

  function clearSyncPreview() {
    state.pendingPayload = null;
    const previewPane = document.getElementById('syncPreviewPane');
    if (previewPane) previewPane.classList.add('hidden');
    switchSyncTab(state.syncTab);
  }

  async function refreshGeneratedTransferCode() {
    if (!SYNC) return;
    const codeEl = document.getElementById('syncGeneratedCode');
    const statsEl = document.getElementById('syncCodeStats');
    const qrBox = document.getElementById('syncQrBox');
    if (!codeEl) return;

    try {
      const payload = SYNC.collectExportPayload();
      const rawLen = JSON.stringify(payload).length;
      const code = await SYNC.encodeTransferCode(payload);
      const baseUrl = `${window.location.origin}${window.location.pathname}`;
      const shareUrl = `${baseUrl}#khys-sync=${encodeURIComponent(code)}`;

      state.generatedCode = code;
      state.generatedLink = shareUrl;
      codeEl.value = code;

      const ratio = rawLen > 0 ? Math.max(0, Math.round((1 - code.length / rawLen) * 100)) : 0;
      if (statsEl) {
        statsEl.textContent = `Kích thước mã: ${formatNumber(code.length)} ký tự (nén ${ratio}% từ ${formatNumber(rawLen)} bytes) • ${payload.meta.answeredQuestions} câu đã trả lời.`;
      }

      if (qrBox) {
        const qrTarget = shareUrl.length <= 920 ? shareUrl : code;
        const qrSvg = qrTarget.length <= 920 ? SYNC.generateQrSvg(qrTarget) : null;
        if (qrSvg) {
          qrBox.innerHTML = `
            <div class="sync-qr-frame">${qrSvg}</div>
            <div class="sync-qr-caption">📱 Quét bằng camera điện thoại để mở &amp; nhập tiến độ ngay</div>
          `;
        } else {
          qrBox.innerHTML = `
            <div class="sync-qr-fallback">
              📦 Gói tiến độ khá lớn (${formatNumber(code.length)} ký tự) — hãy nhấn <strong>Copy Link chuyển nhanh</strong> gửi qua Zalo/Messenger hoặc dùng tab <strong>File JSON</strong> / <strong>Cloud Supabase</strong>.
            </div>
          `;
        }
      }
    } catch (err) {
      if (statsEl) statsEl.textContent = `Không thể tạo mã: ${err.message}`;
    }
  }

  function openSyncModal(defaultTab) {
    const backdrop = document.getElementById('syncModalBackdrop');
    if (!backdrop) return;
    setSyncStatus('', '');
    if (!state.pendingPayload) {
      switchSyncTab(defaultTab || state.syncTab || 'transfer');
    }
    backdrop.classList.remove('hidden');
    backdrop.setAttribute('aria-hidden', 'false');
    refreshGeneratedTransferCode();

    if (SYNC) {
      const cfg = SYNC.loadSupabaseConfig();
      const uEl = document.getElementById('supaUrlInput');
      const kEl = document.getElementById('supaKeyInput');
      const iEl = document.getElementById('supaSyncIdInput');
      const sqlEl = document.getElementById('supaSqlPreview');
      if (uEl && !uEl.value) uEl.value = cfg.url;
      if (kEl && !kEl.value) kEl.value = cfg.key;
      if (iEl && !iEl.value) iEl.value = cfg.syncId;
      if (sqlEl && !sqlEl.textContent) sqlEl.textContent = SYNC.SUPABASE_SETUP_SQL;
    }
  }

  function closeSyncModal() {
    const backdrop = document.getElementById('syncModalBackdrop');
    if (!backdrop) return;
    backdrop.classList.add('hidden');
    backdrop.setAttribute('aria-hidden', 'true');
    clearSyncPreview();
    setSyncStatus('', '');
  }

  async function copyTextWithFeedback(text, btn, okLabel) {
    if (!text) return;
    const orig = btn ? btn.innerHTML : '';
    try {
      await navigator.clipboard.writeText(text);
      if (btn) {
        btn.innerHTML = okLabel;
        setTimeout(() => { btn.innerHTML = orig; }, 1800);
      }
    } catch (e) {
      setSyncStatus('info', 'Trình duyệt không cho phép copy tự động — hãy chọn toàn bộ ô mã và nhấn Ctrl+C.');
    }
  }

  function handleJsonFile(file) {
    if (!file || !SYNC) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const parsed = JSON.parse(String(ev.target && ev.target.result || ''));
        const payload = SYNC.normalizeIncomingPayload(parsed);
        setSyncStatus('', '');
        showSyncPreview(payload, `Từ tệp: ${file.name}`);
      } catch (err) {
        setSyncStatus('error', `Không đọc được tệp JSON: ${err.message}`);
      }
    };
    reader.readAsText(file);
  }

  function bindSyncModalEvents() {
    const btnOpen = document.getElementById('btnOpenSyncModal');
    const btnOpenPanel = document.getElementById('btnQuickSyncFromPanel');
    const btnClose = document.getElementById('btnCloseSyncModal');
    const backdrop = document.getElementById('syncModalBackdrop');

    if (btnOpen) btnOpen.addEventListener('click', () => openSyncModal('transfer'));
    if (btnOpenPanel) btnOpenPanel.addEventListener('click', () => openSyncModal('transfer'));
    if (btnClose) btnClose.addEventListener('click', closeSyncModal);
    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) closeSyncModal();
      });
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && backdrop && !backdrop.classList.contains('hidden')) {
        closeSyncModal();
      }
    });

    document.querySelectorAll('.sync-tab').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.pendingPayload = null;
        const previewPane = document.getElementById('syncPreviewPane');
        if (previewPane) previewPane.classList.add('hidden');
        switchSyncTab(btn.getAttribute('data-sync-tab') || 'transfer');
      });
    });

    const btnCopyLink = document.getElementById('btnCopySyncLink');
    if (btnCopyLink) {
      btnCopyLink.addEventListener('click', () => copyTextWithFeedback(state.generatedLink, btnCopyLink, '✓ Đã copy Link!'));
    }

    const btnCopyCode = document.getElementById('btnCopySyncCode');
    if (btnCopyCode) {
      btnCopyCode.addEventListener('click', () => copyTextWithFeedback(state.generatedCode, btnCopyCode, '✓ Đã copy Mã!'));
    }

    const btnDecode = document.getElementById('btnDecodePastedSync');
    const pasteEl = document.getElementById('syncPasteInput');
    if (btnDecode && pasteEl) {
      btnDecode.addEventListener('click', async () => {
        if (!SYNC) return;
        try {
          const payload = await SYNC.decodeTransferCode(pasteEl.value);
          setSyncStatus('', '');
          showSyncPreview(payload, 'Từ mã / link dán vào');
        } catch (err) {
          setSyncStatus('error', err.message);
        }
      });
    }

    const btnClearPaste = document.getElementById('btnClearPastedSync');
    if (btnClearPaste && pasteEl) {
      btnClearPaste.addEventListener('click', () => {
        pasteEl.value = '';
        setSyncStatus('', '');
      });
    }

    const btnExportFile = document.getElementById('btnExportJsonFile');
    if (btnExportFile && SYNC) {
      btnExportFile.addEventListener('click', () => {
        const payload = SYNC.collectExportPayload();
        const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 16);
        const filename = `KHYS_Progress_${stamp}.json`;
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        setSyncStatus('success', `Đã tải xuống tệp ${filename} (${payload.meta.answeredQuestions} câu).`);
      });
    }

    const fileInput = document.getElementById('syncFileInput');
    const dropzone = document.getElementById('syncFileDropzone');
    if (fileInput) {
      fileInput.addEventListener('change', (e) => {
        const f = e.target.files && e.target.files[0];
        if (f) handleJsonFile(f);
        e.target.value = '';
      });
    }
    if (dropzone) {
      dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.classList.add('dragover');
      });
      dropzone.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));
      dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.classList.remove('dragover');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) handleJsonFile(f);
      });
    }

    // Cloud Supabase handlers
    const uEl = document.getElementById('supaUrlInput');
    const kEl = document.getElementById('supaKeyInput');
    const iEl = document.getElementById('supaSyncIdInput');
    const btnGenId = document.getElementById('btnGenSyncId');
    const btnSaveSupa = document.getElementById('btnSupaSaveCfg');
    const btnPushSupa = document.getElementById('btnSupaPush');
    const btnPullSupa = document.getElementById('btnSupaPull');
    const btnCopySql = document.getElementById('btnCopySupaSql');

    if (btnGenId && iEl) {
      btnGenId.addEventListener('click', () => {
        const rand = Math.random().toString(36).slice(2, 7);
        iEl.value = `khys2026-${rand}`;
      });
    }
    if (btnSaveSupa && SYNC) {
      btnSaveSupa.addEventListener('click', () => {
        SYNC.saveSupabaseConfig({ url: uEl.value, key: kEl.value, syncId: iEl.value });
        setSyncStatus('success', 'Đã lưu cấu hình Supabase trên trình duyệt này.');
      });
    }
    if (btnCopySql && SYNC) {
      btnCopySql.addEventListener('click', () => copyTextWithFeedback(SYNC.SUPABASE_SETUP_SQL, btnCopySql, '✓ Đã copy SQL!'));
    }
    if (btnPushSupa && SYNC) {
      btnPushSupa.addEventListener('click', async () => {
        try {
          setSyncStatus('info', '⏳ Đang đẩy tiến độ lên Supabase Cloud...');
          SYNC.saveSupabaseConfig({ url: uEl.value, key: kEl.value, syncId: iEl.value });
          const payload = SYNC.collectExportPayload();
          const res = await SYNC.supabasePush(uEl.value, kEl.value, iEl.value, payload);
          setSyncStatus('success', `☁️ Đã đẩy lên Cloud thành công (Hồ sơ: ${res.syncId} • ${payload.meta.answeredQuestions} câu).`);
        } catch (err) {
          setSyncStatus('error', err.message);
        }
      });
    }
    if (btnPullSupa && SYNC) {
      btnPullSupa.addEventListener('click', async () => {
        try {
          setSyncStatus('info', '⏳ Đang tải tiến độ từ Supabase Cloud...');
          SYNC.saveSupabaseConfig({ url: uEl.value, key: kEl.value, syncId: iEl.value });
          const res = await SYNC.supabasePull(uEl.value, kEl.value, iEl.value);
          setSyncStatus('', '');
          showSyncPreview(res.payload, `Từ Cloud Supabase (${iEl.value.trim()})`);
        } catch (err) {
          setSyncStatus('error', err.message);
        }
      });
    }

    // Preview confirmation buttons
    const btnCancelPreview = document.getElementById('btnCancelPreview');
    const btnApplyMerge = document.getElementById('btnApplySyncMerge');
    const btnApplyOverwrite = document.getElementById('btnApplySyncOverwrite');

    if (btnCancelPreview) btnCancelPreview.addEventListener('click', clearSyncPreview);
    if (btnApplyMerge && SYNC) {
      btnApplyMerge.addEventListener('click', () => {
        if (!state.pendingPayload) return;
        SYNC.applyImportPayload(state.pendingPayload, 'merge');
        clearSyncPreview();
        applyTheme(safeGetStorage(META.portalThemeKey) || state.theme);
        renderCards();
        refreshGeneratedTransferCode();
        setSyncStatus('success', '✅ Đã gộp thông minh tiến độ từ thiết bị khác! Điểm cao nhất của cả 2 máy đã được giữ lại.');
      });
    }
    if (btnApplyOverwrite && SYNC) {
      btnApplyOverwrite.addEventListener('click', () => {
        if (!state.pendingPayload) return;
        if (!window.confirm('Ghi đè sẽ thay thế toàn bộ tiến độ hiện có trên máy này bằng dữ liệu mới. Bạn chắc chắn muốn tiếp tục?')) {
          return;
        }
        SYNC.applyImportPayload(state.pendingPayload, 'overwrite');
        clearSyncPreview();
        applyTheme(safeGetStorage(META.portalThemeKey) || 'light');
        renderCards();
        refreshGeneratedTransferCode();
        setSyncStatus('success', '✅ Đã khôi phục (ghi đè) toàn bộ tiến độ từ thiết bị khác thành công!');
      });
    }
  }

  async function checkIncomingHashSync() {
    if (!SYNC) return;
    const hash = window.location.hash || '';
    const m = hash.match(/khys-sync=([^&]+)/);
    if (!m) return;
    try {
      const token = decodeURIComponent(m[1]);
      const payload = await SYNC.decodeTransferCode(token);
      if (window.history && typeof window.history.replaceState === 'function') {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
      openSyncModal('transfer');
      showSyncPreview(payload, 'Từ đường dẫn chuyển nhanh');
    } catch (err) {
      openSyncModal('transfer');
      setSyncStatus('error', `Link chuyển nhanh không hợp lệ: ${err.message}`);
    }
  }

  function init() {
    const savedTheme = safeGetStorage(META.portalThemeKey) || 'light';
    applyTheme(savedTheme);
    applyAnalyticsCollapsed(safeGetStorage(ANALYTICS_COLLAPSED_KEY) === '1');
    renderCards();
    bindEvents();
    checkIncomingHashSync();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

// ==========================================================================
// PORTAL MENU CONTROLLER — CỔNG ÔN TẬP KHYS SĐH 2026 (YDS / UMP)
// ==========================================================================

(function () {
  'use strict';

  const META = window.PORTAL_META || { portalThemeKey: 'yds_portal_theme' };
  const SUBJECTS = window.PORTAL_SUBJECTS || [];
  const readProgress = window.readSubjectProgress;

  const state = {
    theme: 'light',
    filter: 'all',
    search: ''
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
        totalLessons: subject.lessonsCount,
        answeredQuestions: 0,
        totalQuestions: subject.questionsCount,
        percent: 0
      }
    }));
  }

  function renderSummary(snapshots) {
    const totalLessons = snapshots.reduce((acc, item) => acc + item.progress.totalLessons, 0);
    const totalQuestions = snapshots.reduce((acc, item) => acc + item.progress.totalQuestions, 0);
    const completedLessons = snapshots.reduce((acc, item) => acc + item.progress.completedLessons, 0);
    const answeredQuestions = snapshots.reduce((acc, item) => acc + item.progress.answeredQuestions, 0);
    const inProgressCount = snapshots.filter(
      (item) => item.progress.answeredQuestions > 0 || item.progress.completedLessons > 0
    ).length;

    const pct = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

    const elSubjects = document.getElementById('statTotalSubjects');
    const elCurriculum = document.getElementById('statTotalCurriculum');
    const elCompleted = document.getElementById('statCompletedLessons');
    const elFill = document.getElementById('statOverallFill');
    const elAnswered = document.getElementById('statAnsweredQuestions');
    const elInProgress = document.getElementById('inProgressCount');

    if (elSubjects) elSubjects.textContent = `${SUBJECTS.length} môn`;
    if (elCurriculum) {
      elCurriculum.textContent = `${totalLessons} bài • ${formatNumber(totalQuestions)} câu`;
    }
    if (elCompleted) {
      elCompleted.textContent = `${completedLessons} / ${totalLessons} bài (${pct}%)`;
    }
    if (elFill) elFill.style.width = `${pct}%`;
    if (elAnswered) {
      elAnswered.textContent = `${formatNumber(answeredQuestions)} / ${formatNumber(totalQuestions)} câu trắc nghiệm đã trả lời`;
    }
    if (elInProgress) elInProgress.textContent = String(inProgressCount);
  }

  function matchesFilter(item) {
    const { subject, progress } = item;
    if (state.filter === 'co-so' && subject.category !== 'co-so') return false;
    if (state.filter === 'chuyen-nganh' && subject.category !== 'chuyen-nganh') return false;
    if (state.filter === 'in-progress' && progress.answeredQuestions === 0 && progress.completedLessons === 0) {
      return false;
    }

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
    renderSummary(snapshots);

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
              <span>Tiến độ: <strong>${progress.completedLessons}/${progress.totalLessons} bài</strong></span>
              <span>${formatNumber(progress.answeredQuestions)}/${formatNumber(progress.totalQuestions)} câu</span>
            </div>
            <div class="card-track" aria-hidden="true">
              <div class="card-fill" style="width: ${progress.percent}%"></div>
            </div>
          </div>

          <div class="card-actions">
            <a class="btn-enter" href="${escapeHtml(subject.href)}">
              <span>Vào học môn này</span>
              <span aria-hidden="true">→</span>
            </a>
            <a
              class="btn-backup"
              href="${escapeHtml(subject.backupRepoUrl)}"
              target="_blank"
              rel="noopener noreferrer"
              title="Mở repo dự phòng ${escapeHtml(subject.backupRepoName)} trên GitHub"
            >
              Dự phòng ↗
            </a>
          </div>
        </article>
      `;
    }).join('');
  }

  function renderBackups() {
    const list = document.getElementById('backupList');
    if (!list) return;
    list.innerHTML = SUBJECTS.map((subject) => `
      <div class="backup-item">
        <div class="backup-item-main">
          <div class="backup-item-name">${escapeHtml(subject.name)}</div>
          <div class="backup-item-route">src/pages/${escapeHtml(subject.slug)}/ → ${escapeHtml(subject.route)}</div>
        </div>
        <a href="${escapeHtml(subject.backupRepoUrl)}" target="_blank" rel="noopener noreferrer">
          GitHub gốc ↗
        </a>
      </div>
    `).join('');
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

    window.addEventListener('storage', renderCards);
    window.addEventListener('pageshow', renderCards);
    window.addEventListener('focus', renderCards);
  }

  function init() {
    const savedTheme = safeGetStorage(META.portalThemeKey) || 'light';
    applyTheme(savedTheme);
    renderCards();
    renderBackups();
    bindEvents();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

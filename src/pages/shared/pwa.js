// ==========================================================================
// PWA CONTROLLER — Đăng ký Service Worker & Hỗ trợ cài đặt App độc lập
// Dùng chung cho trang chủ (/) và cả 7 module môn học (/sinh-ly/, ...)
// ==========================================================================

(function () {
  'use strict';

  const currentScript = document.currentScript;
  const manifestLink = document.querySelector('link[rel="manifest"]');
  const portalRootUrl = currentScript && currentScript.src
    ? new URL('../', currentScript.src).href
    : manifestLink
      ? new URL('./', manifestLink.href).href
      : new URL('./', window.location.href).href;

  const swUrl = new URL('./sw.js', portalRootUrl).href;

  let deferredPrompt = null;
  let installedNoticeShown = false;

  function isStandaloneMode() {
    return (
      window.matchMedia('(display-mode: standalone)').matches ||
      window.matchMedia('(display-mode: window-controls-overlay)').matches ||
      window.navigator.standalone === true
    );
  }

  function applyStandaloneFlag() {
    if (isStandaloneMode()) {
      document.documentElement.setAttribute('data-pwa-standalone', 'true');
    } else {
      document.documentElement.removeAttribute('data-pwa-standalone');
    }
  }

  function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) return;
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register(swUrl, { scope: portalRootUrl })
        .catch((err) => {
          console.warn('Không thể đăng ký Service Worker:', err);
        });
    });
  }

  function syncInstallButton(justInstalled) {
    applyStandaloneFlag();
    const btn = document.getElementById('btnInstallPwa');
    if (!btn) return;

    if (justInstalled) {
      installedNoticeShown = true;
      btn.classList.remove('hidden');
      btn.disabled = true;
      btn.innerHTML = '✓ <span class="hide-xs">Đã cài đặt App</span>';
      setTimeout(() => {
        if (isStandaloneMode()) {
          btn.classList.add('hidden');
        } else {
          btn.disabled = false;
          btn.innerHTML = '📲 <span class="hide-xs">Đã cài App</span>';
        }
      }, 2600);
      return;
    }

    if (isStandaloneMode()) {
      btn.classList.add('hidden');
      return;
    }

    btn.classList.remove('hidden');
    btn.disabled = false;

    if (deferredPrompt) {
      btn.classList.add('btn-install-ready');
      btn.title = 'Nhấn để cài đặt thành ứng dụng độc lập ngay';
      btn.innerHTML = '📲 <span class="hide-xs">Cài đặt App</span>';
    } else if (!installedNoticeShown) {
      btn.classList.remove('btn-install-ready');
      btn.title = 'Xem cách cài đặt thành ứng dụng độc lập trên Chrome / Safari';
      btn.innerHTML = '📲 <span class="hide-xs">Cài đặt App</span>';
    }
  }

  function closeGuideModal() {
    const modal = document.getElementById('pwaGuideModal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
  }

  function openGuideModal() {
    let modal = document.getElementById('pwaGuideModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'pwaGuideModal';
      modal.className = 'pwa-modal-backdrop hidden';
      modal.setAttribute('aria-hidden', 'true');
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
      modal.setAttribute('aria-labelledby', 'pwaGuideTitle');

      const secureWarning = !window.isSecureContext
        ? '<p class="pwa-guide-warn">⚠️ Trình duyệt yêu cầu mở web qua <strong>HTTPS</strong> (như GitHub Pages / Vercel) hoặc <strong>localhost</strong> để bật nút cài đặt tự động.</p>'
        : '';

      modal.innerHTML = `
        <div class="pwa-modal-dialog">
          <div class="pwa-modal-header">
            <h2 id="pwaGuideTitle">📲 Cài đặt thành App độc lập</h2>
            <button type="button" class="pwa-modal-close" id="pwaGuideCloseBtn" aria-label="Đóng hướng dẫn">✕</button>
          </div>
          <div class="pwa-modal-body">
            ${secureWarning}
            <p class="pwa-guide-intro">
              Ứng dụng hỗ trợ chạy như <strong>phần mềm độc lập</strong> (cửa sổ riêng, không thanh địa chỉ, có biểu tượng ngoài màn hình chính / Desktop):
            </p>
            <ul class="pwa-guide-list">
              <li>
                <strong>Chrome / Edge trên máy tính:</strong> Nhấn biểu tượng <strong>Cài đặt</strong> ở góc phải thanh địa chỉ, hoặc vào menu <code>⋮</code> → <strong>Truyền, lưu và chia sẻ</strong> → <strong>Cài đặt trang dưới dạng ứng dụng...</strong> (hoặc <strong>Tạo lối tắt...</strong> và tích <em>Mở dưới dạng cửa sổ</em>).
              </li>
              <li>
                <strong>Chrome trên Android:</strong> Nhấn menu <code>⋮</code> ở góc trên phải → chọn <strong>Cài đặt ứng dụng</strong> (hoặc <strong>Thêm vào màn hình chính</strong>).
              </li>
              <li>
                <strong>Safari trên iPhone / iPad:</strong> Nhấn nút <strong>Chia sẻ (⎋)</strong> ở thanh công cụ → chọn <strong>Thêm vào MH chính (Add to Home Screen)</strong>.
              </li>
            </ul>
          </div>
          <div class="pwa-modal-footer">
            <button type="button" class="btn btn-outline" id="pwaGuideOkBtn">Đã hiểu</button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);

      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeGuideModal();
      });
      const closeBtn = document.getElementById('pwaGuideCloseBtn');
      const okBtn = document.getElementById('pwaGuideOkBtn');
      if (closeBtn) closeBtn.addEventListener('click', closeGuideModal);
      if (okBtn) okBtn.addEventListener('click', closeGuideModal);
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
          closeGuideModal();
        }
      });
    }

    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
  }

  async function handleInstallClick() {
    if (deferredPrompt) {
      const promptEvent = deferredPrompt;
      deferredPrompt = null;
      try {
        const result = await promptEvent.prompt();
        const choice = result || (await promptEvent.userChoice);
        if (choice && choice.outcome === 'accepted') {
          syncInstallButton(true);
        } else {
          syncInstallButton(false);
        }
      } catch (err) {
        syncInstallButton(false);
        openGuideModal();
      }
      return;
    }
    openGuideModal();
  }

  function initInstallUi() {
    syncInstallButton(false);

    const btn = document.getElementById('btnInstallPwa');
    if (btn) {
      btn.addEventListener('click', handleInstallClick);
    }

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      syncInstallButton(false);
    });

    window.addEventListener('appinstalled', () => {
      deferredPrompt = null;
      syncInstallButton(true);
    });

    const media = window.matchMedia('(display-mode: standalone)');
    if (media && typeof media.addEventListener === 'function') {
      media.addEventListener('change', () => syncInstallButton(false));
    }
  }

  const ACTIVITY_KEY = 'yds_portal_activity_v1';
  const SUBJECT_KEY_MAP = {
    yds_physio_2026_progress: { slug: 'sinh-ly', schema: 'v1' },
    yds_anat_2026_progress: { slug: 'giai-phau', schema: 'v1' },
    yds_histo_2026_progress: { slug: 'mo-hoc', schema: 'v1' },
    yds_patho_2026_progress: { slug: 'giai-phau-benh', schema: 'v2' },
    yds_slb_md_2026_progress: { slug: 'sinh-ly-benh-mien-dich', schema: 'v2' },
    yds_micro_2026_progress: { slug: 'vi-sinh', schema: 'v1' },
    yds_parasit_2026_progress: { slug: 'ky-sinh-trung', schema: 'v1' }
  };

  function getTodayKey() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  function summarizeProgressRaw(raw, schema) {
    if (!raw) return { answered: 0, correct: 0 };
    try {
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object') return { answered: 0, correct: 0 };
      let answered = 0;
      let correct = 0;
      if (schema === 'v2') {
        const completed = parsed.completedLessons || {};
        const answers = parsed.answers || {};
        Object.keys(answers).forEach((id) => {
          const cnt = Object.keys(answers[id] || {}).length;
          answered += cnt;
          if (cnt > 0) {
            const best = Number((completed[id] && completed[id].bestScore) || 0);
            correct += Math.min(cnt, Math.max(0, best));
          }
        });
      } else {
        Object.keys(parsed).forEach((id) => {
          const entry = parsed[id];
          if (!entry || typeof entry !== 'object') return;
          const cnt = Object.keys(entry.answered || {}).length;
          answered += cnt;
          correct += Math.min(cnt, Math.max(0, Number(entry.score || 0)));
        });
      }
      return { answered, correct };
    } catch (e) {
      return { answered: 0, correct: 0 };
    }
  }

  function initActivityTracker() {
    if (window.__khysActivityHooked) return;
    window.__khysActivityHooked = true;

    let nativeSetItem;
    let nativeGetItem;
    try {
      nativeSetItem = Storage.prototype.setItem;
      nativeGetItem = Storage.prototype.getItem;
    } catch (e) {
      return;
    }

    function loadActivity() {
      try {
        const raw = nativeGetItem.call(window.localStorage, ACTIVITY_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed && typeof parsed === 'object') {
            return {
              days: parsed.days && typeof parsed.days === 'object' ? parsed.days : {},
              dailyGoal: Number(parsed.dailyGoal || 20),
              lastSnapshots: parsed.lastSnapshots && typeof parsed.lastSnapshots === 'object' ? parsed.lastSnapshots : {}
            };
          }
        }
      } catch (e) {}
      return { days: {}, dailyGoal: 20, lastSnapshots: {} };
    }

    function saveActivity(act) {
      try {
        nativeSetItem.call(window.localStorage, ACTIVITY_KEY, JSON.stringify(act));
      } catch (e) {}
    }

    // Seed baseline snapshots for pre-existing progress without attributing old answers to today
    try {
      const act = loadActivity();
      let changed = false;
      Object.keys(SUBJECT_KEY_MAP).forEach((storageKey) => {
        const meta = SUBJECT_KEY_MAP[storageKey];
        if (!act.lastSnapshots[meta.slug]) {
          const raw = nativeGetItem.call(window.localStorage, storageKey);
          act.lastSnapshots[meta.slug] = summarizeProgressRaw(raw, meta.schema);
          changed = true;
        }
      });
      if (changed) saveActivity(act);
    } catch (e) {}

    Storage.prototype.setItem = function (key, value) {
      nativeSetItem.call(this, key, value);
      try {
        if (this !== window.localStorage) return;
        const meta = SUBJECT_KEY_MAP[key];
        if (!meta) return;

        const nextSnap = summarizeProgressRaw(String(value || ''), meta.schema);
        const act = loadActivity();
        const prevSnap = act.lastSnapshots[meta.slug] || { answered: 0, correct: 0 };
        const deltaAnswered = nextSnap.answered - Number(prevSnap.answered || 0);
        const deltaCorrect = Math.max(0, nextSnap.correct - Number(prevSnap.correct || 0));

        if (deltaAnswered > 0) {
          const today = getTodayKey();
          if (!act.days[today]) {
            act.days[today] = { answered: 0, correct: 0, subjects: {} };
          }
          act.days[today].answered = Number(act.days[today].answered || 0) + deltaAnswered;
          act.days[today].correct = Number(act.days[today].correct || 0) + Math.min(deltaAnswered, deltaCorrect);
          if (!act.days[today].subjects || typeof act.days[today].subjects !== 'object') {
            act.days[today].subjects = {};
          }
          act.days[today].subjects[meta.slug] = Number(act.days[today].subjects[meta.slug] || 0) + deltaAnswered;
        }

        act.lastSnapshots[meta.slug] = nextSnap;
        saveActivity(act);
      } catch (e) {
        // Never interfere with module storage writes
      }
    };
  }

  registerServiceWorker();
  applyStandaloneFlag();
  initActivityTracker();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initInstallUi);
  } else {
    initInstallUi();
  }
})();

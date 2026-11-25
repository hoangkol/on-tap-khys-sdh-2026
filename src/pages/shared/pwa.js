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

  registerServiceWorker();
  applyStandaloneFlag();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initInstallUi);
  } else {
    initInstallUi();
  }
})();

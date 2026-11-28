// ==========================================================================
// SERVICE WORKER — CỔNG ÔN TẬP KHYS SĐH 2026 (YDS / UMP)
// Hỗ trợ cài đặt PWA độc lập & lưu bộ nhớ đệm thông minh theo đường dẫn tương đối
// ==========================================================================

const CACHE_PREFIX = 'khys-yds-2026-';
const CACHE_NAME = `${CACHE_PREFIX}v4`;
const SCOPE_URL = self.registration.scope;

const CORE_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.webmanifest',
  './shared/portal-config.js',
  './shared/portal-sync.js',
  './shared/portal-nav.css',
  './shared/pwa.js',
  './icons/logo.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png'
];

const STATIC_EXT_RE = /\.(?:png|jpe?g|webp|gif|svg|ico|woff2?)$/i;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS.map((p) => new URL(p, SCOPE_URL).href)))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

function isCacheableResponse(response) {
  return Boolean(response && response.status === 200 && !response.redirected && response.type === 'basic');
}

function isStaticAssetUrl(url) {
  const rel = url.href.slice(SCOPE_URL.length);
  return (
    rel.startsWith('icons/') ||
    rel.includes('/assets/') ||
    rel.includes('/vendor/') ||
    STATIC_EXT_RE.test(url.pathname)
  );
}

async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request, { ignoreSearch: true });
  if (cached) return cached;

  const response = await fetch(request);
  if (isCacheableResponse(response)) {
    cache.put(request, response.clone());
  }
  return response;
}

async function matchCachedPage(request, url) {
  const direct = await caches.match(request, { ignoreSearch: true });
  if (direct) return direct;

  if (url.pathname.endsWith('/')) {
    const indexCandidate = new URL('index.html', url.href).href;
    const fromIndex = await caches.match(indexCandidate, { ignoreSearch: true });
    if (fromIndex) return fromIndex;
  }
  return null;
}

function buildOfflineResponse() {
  const html = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Đang ngoại tuyến – KHYS YDS 2026</title>
  <style>
    body{font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0f172a;color:#f8fafc;padding:24px;text-align:center}
    .card{max-width:440px;background:#1e293b;border:1px solid #334155;border-radius:16px;padding:28px;box-shadow:0 16px 32px rgba(0,0,0,.35)}
    h1{font-size:1.25rem;margin:0 0 10px}
    p{font-size:.95rem;color:#cbd5e1;line-height:1.55;margin:0 0 18px}
    a,button{display:inline-block;padding:10px 16px;border-radius:10px;border:0;background:#0284c7;color:#fff;font-weight:700;font-size:.92rem;text-decoration:none;cursor:pointer}
  </style>
</head>
<body>
  <div class="card">
    <h1>Môn học này chưa được lưu ngoại tuyến</h1>
    <p>Hãy mở trang này một lần khi có mạng để lưu vào bộ nhớ đệm, hoặc quay về menu chính để mở các môn đã tải.</p>
    <a href="${SCOPE_URL}">← Quay về trang chủ</a>
  </div>
</body>
</html>`;
  return new Response(html, {
    status: 503,
    headers: { 'Content-Type': 'text/html; charset=utf-8' }
  });
}

async function networkFirst(request, url) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetch(request);
    if (isCacheableResponse(response)) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    const cached = await matchCachedPage(request, url);
    if (cached) return cached;
    if (request.mode === 'navigate') {
      return buildOfflineResponse();
    }
    throw err;
  }
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (!url.href.startsWith(SCOPE_URL)) return;

  if (isStaticAssetUrl(url) && request.mode !== 'navigate') {
    event.respondWith(cacheFirst(request));
  } else {
    event.respondWith(networkFirst(request, url));
  }
});

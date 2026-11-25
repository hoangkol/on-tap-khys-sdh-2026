import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { buildPortal } from './build.mjs';
import { createPortalServer } from './dev-server.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const srcPagesDir = path.join(projectRoot, 'src', 'pages');

function loadPortalConfig() {
  const cfgPath = path.join(srcPagesDir, 'shared', 'portal-config.js');
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(cfgPath, 'utf8'), ctx);
  assert.ok(Array.isArray(ctx.window.PORTAL_SUBJECTS), 'PORTAL_SUBJECTS must be an array');
  assert.equal(ctx.window.PORTAL_SUBJECTS.length, 7, 'Expected exactly 7 subjects');
  return ctx.window;
}

function checkLocalHtmlReferences(htmlPath, baseDir) {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const attrRegex = /(?:src|href)="([^"]+)"/g;
  const checked = [];
  let match;
  while ((match = attrRegex.exec(html)) !== null) {
    const ref = match[1];
    if (
      ref.startsWith('http://') ||
      ref.startsWith('https://') ||
      ref.startsWith('data:') ||
      ref.startsWith('#')
    ) {
      continue;
    }
    const resolved = path.resolve(baseDir, ref);
    assert.ok(fs.existsSync(resolved), `Missing referenced path "${ref}" in ${htmlPath}`);
    checked.push(ref);
  }
  return checked;
}

function checkModuleImageAssets(moduleDir) {
  const jsFiles = fs.readdirSync(moduleDir).filter((f) => /^(figures.*|diagrams.*)\.js$/.test(f));
  let assetCount = 0;
  for (const file of jsFiles) {
    const content = fs.readFileSync(path.join(moduleDir, file), 'utf8');
    const regex = /['"](assets\/[^'"]+)['"]/g;
    let m;
    while ((m = regex.exec(content)) !== null) {
      const assetPath = path.join(moduleDir, m[1]);
      assert.ok(fs.existsSync(assetPath), `Missing image asset ${m[1]} referenced in ${moduleDir}/${file}`);
      assetCount += 1;
    }
  }
  return assetCount;
}

function checkPwaSetup(subjects) {
  const manifestPath = path.join(srcPagesDir, 'manifest.webmanifest');
  assert.ok(fs.existsSync(manifestPath), 'Missing src/pages/manifest.webmanifest');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

  assert.equal(manifest.display, 'standalone', 'Manifest display must be standalone');
  assert.equal(manifest.start_url, './', 'Manifest start_url must be ./ for subpath portability');
  assert.equal(manifest.scope, './', 'Manifest scope must be ./ for subpath portability');
  assert.equal(manifest.id, './', 'Manifest id must be ./');
  assert.ok(Array.isArray(manifest.icons) && manifest.icons.length >= 4, 'Manifest must define any and maskable icons');

  const has192Any = manifest.icons.some((i) => i.sizes === '192x192' && i.purpose === 'any');
  const has512Any = manifest.icons.some((i) => i.sizes === '512x512' && i.purpose === 'any');
  const has192Mask = manifest.icons.some((i) => i.sizes === '192x192' && i.purpose === 'maskable');
  const has512Mask = manifest.icons.some((i) => i.sizes === '512x512' && i.purpose === 'maskable');
  assert.ok(has192Any && has512Any, 'Manifest must include 192x192 and 512x512 purpose=any PNG icons');
  assert.ok(has192Mask && has512Mask, 'Manifest must include 192x192 and 512x512 purpose=maskable PNG icons');

  for (const icon of manifest.icons) {
    const iconFile = path.resolve(srcPagesDir, icon.src);
    assert.ok(fs.existsSync(iconFile), `Missing manifest icon ${icon.src}`);
  }

  assert.ok(Array.isArray(manifest.shortcuts) && manifest.shortcuts.length === subjects.length, 'Manifest shortcuts should cover all 7 subjects');
  for (const sc of manifest.shortcuts) {
    const targetDir = path.resolve(srcPagesDir, sc.url);
    assert.ok(fs.existsSync(path.join(targetDir, 'index.html')), `Shortcut target missing: ${sc.url}`);
    for (const ic of sc.icons || []) {
      assert.ok(fs.existsSync(path.resolve(srcPagesDir, ic.src)), `Missing shortcut icon: ${ic.src}`);
    }
  }

  const swPath = path.join(srcPagesDir, 'sw.js');
  const pwaJsPath = path.join(srcPagesDir, 'shared', 'pwa.js');
  assert.ok(fs.existsSync(swPath), 'Missing src/pages/sw.js');
  assert.ok(fs.existsSync(pwaJsPath), 'Missing src/pages/shared/pwa.js');
  new vm.Script(fs.readFileSync(swPath, 'utf8'), { filename: 'sw.js' });
  new vm.Script(fs.readFileSync(pwaJsPath, 'utf8'), { filename: 'pwa.js' });

  return manifest;
}

async function runHttpChecks(rootDir, subjects, manifest) {
  const server = createPortalServer({ rootDir });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const addr = server.address();
  const baseUrl = `http://127.0.0.1:${addr.port}`;

  try {
    const homeRes = await fetch(`${baseUrl}/`);
    assert.equal(homeRes.status, 200, 'GET / should return 200');
    const homeHtml = await homeRes.text();
    assert.ok(homeHtml.includes('shared/portal-config.js'), 'Home page should load shared/portal-config.js');
    assert.ok(homeHtml.includes('./manifest.webmanifest'), 'Home page should link manifest.webmanifest');
    assert.ok(homeHtml.includes('./shared/pwa.js'), 'Home page should load shared/pwa.js');

    const manifestRes = await fetch(`${baseUrl}/manifest.webmanifest`);
    assert.equal(manifestRes.status, 200, 'GET /manifest.webmanifest should return 200');
    assert.ok(
      (manifestRes.headers.get('content-type') || '').includes('application/manifest+json'),
      'Manifest must be served as application/manifest+json'
    );

    const swRes = await fetch(`${baseUrl}/sw.js`);
    assert.equal(swRes.status, 200, 'GET /sw.js should return 200');

    const pwaJsRes = await fetch(`${baseUrl}/shared/pwa.js`);
    assert.equal(pwaJsRes.status, 200, 'GET /shared/pwa.js should return 200');

    for (const icon of manifest.icons) {
      const iconRes = await fetch(`${baseUrl}/${icon.src}`);
      assert.equal(iconRes.status, 200, `GET /${icon.src} should return 200`);
    }

    for (const s of subjects) {
      const noSlash = await fetch(`${baseUrl}/${s.slug}`, { redirect: 'manual' });
      assert.equal(noSlash.status, 302, `GET /${s.slug} should redirect to /${s.slug}/`);
      assert.equal(noSlash.headers.get('location'), `/${s.slug}/`);

      const modRes = await fetch(`${baseUrl}/${s.slug}/`);
      assert.equal(modRes.status, 200, `GET /${s.slug}/ should return 200`);
      const modHtml = await modRes.text();
      assert.ok(modHtml.includes('../shared/portal-nav.css'), `${s.slug} should include portal-nav.css`);
      assert.ok(modHtml.includes('../manifest.webmanifest'), `${s.slug} should link ../manifest.webmanifest`);
      assert.ok(modHtml.includes('../shared/pwa.js'), `${s.slug} should load ../shared/pwa.js`);
      assert.ok(modHtml.includes('href="../"'), `${s.slug} should link back to ../`);

      const cssRes = await fetch(`${baseUrl}/${s.slug}/styles.css`);
      assert.equal(cssRes.status, 200, `GET /${s.slug}/styles.css should return 200`);

      const jsRes = await fetch(`${baseUrl}/${s.slug}/app.js`);
      assert.equal(jsRes.status, 200, `GET /${s.slug}/app.js should return 200`);
    }

    const sharedCssRes = await fetch(`${baseUrl}/shared/portal-nav.css`);
    assert.equal(sharedCssRes.status, 200, 'GET /shared/portal-nav.css should return 200');

    const threeRes = await fetch(`${baseUrl}/giai-phau/vendor/three.min.js`);
    assert.equal(threeRes.status, 200, 'GET /giai-phau/vendor/three.min.js should return 200');
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
}

async function main() {
  const { PORTAL_SUBJECTS, readSubjectProgress } = loadPortalConfig();

  // Check unique storage keys & routes
  const storageKeys = new Set();
  const slugs = new Set();
  for (const s of PORTAL_SUBJECTS) {
    assert.ok(!storageKeys.has(s.storageKey), `Duplicate storageKey: ${s.storageKey}`);
    assert.ok(!slugs.has(s.slug), `Duplicate slug: ${s.slug}`);
    storageKeys.add(s.storageKey);
    slugs.add(s.slug);
  }

  // Test progress reader for both v1 and v2 schemas
  const mockStore = {
    getItem(key) {
      if (key === 'yds_physio_2026_progress') {
        return JSON.stringify({ 1: { answered: { 0: 1, 1: 2 }, total: 4 } });
      }
      if (key === 'yds_patho_2026_progress') {
        return JSON.stringify({
          answers: { 1: { 0: 1, 1: 0, 2: 3 } },
          completedLessons: { 1: { bestScore: 20, total: 24 } }
        });
      }
      return null;
    }
  };
  const physioSnap = readSubjectProgress(PORTAL_SUBJECTS.find((s) => s.slug === 'sinh-ly'), mockStore);
  assert.equal(physioSnap.completedLessons, 1);
  assert.equal(physioSnap.answeredQuestions, 2);

  const pathoSnap = readSubjectProgress(PORTAL_SUBJECTS.find((s) => s.slug === 'giai-phau-benh'), mockStore);
  assert.equal(pathoSnap.completedLessons, 1);
  assert.equal(pathoSnap.answeredQuestions, 3);

  // Verify root homepage references & PWA manifest/service worker
  const homeRefs = checkLocalHtmlReferences(path.join(srcPagesDir, 'index.html'), srcPagesDir);
  assert.ok(homeRefs.includes('./shared/portal-config.js'));
  assert.ok(homeRefs.includes('./manifest.webmanifest'));
  assert.ok(homeRefs.includes('./shared/pwa.js'));
  assert.ok(homeRefs.includes('./icons/apple-touch-icon.png'));
  const manifest = checkPwaSetup(PORTAL_SUBJECTS);

  // Verify each module's references, assets, and portal return navigation
  let totalAssetsChecked = 0;
  for (const s of PORTAL_SUBJECTS) {
    const modDir = path.join(srcPagesDir, s.slug);
    const modIndex = path.join(modDir, 'index.html');
    assert.ok(fs.existsSync(modIndex), `Missing ${modIndex}`);
    assert.ok(!fs.existsSync(path.join(modDir, '.git')), `Unexpected nested .git in ${modDir}`);

    const refs = checkLocalHtmlReferences(modIndex, modDir);
    assert.ok(refs.includes('../shared/portal-nav.css'), `${s.slug} missing portal-nav.css link`);
    assert.ok(refs.includes('../manifest.webmanifest'), `${s.slug} missing ../manifest.webmanifest link`);
    assert.ok(refs.includes('../shared/pwa.js'), `${s.slug} missing ../shared/pwa.js script`);
    assert.ok(refs.includes('../icons/apple-touch-icon.png'), `${s.slug} missing apple-touch-icon link`);
    assert.ok(refs.includes('../'), `${s.slug} missing ../ return link`);
    totalAssetsChecked += checkModuleImageAssets(modDir);
  }

  // Build dist/ and verify both src/pages and dist over HTTP
  const buildInfo = buildPortal();
  assert.ok(fs.existsSync(path.join(buildInfo.distDir, '.nojekyll')), 'dist/.nojekyll missing');
  await runHttpChecks(srcPagesDir, PORTAL_SUBJECTS, manifest);
  await runHttpChecks(buildInfo.distDir, PORTAL_SUBJECTS, manifest);

  console.log(
    `ALL VERIFICATIONS PASSED: ${PORTAL_SUBJECTS.length} subjects, ${totalAssetsChecked} image asset refs checked, dist built (${buildInfo.fileCount} files, ${buildInfo.totalMB} MB), HTTP routes verified on both src/pages and dist.`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

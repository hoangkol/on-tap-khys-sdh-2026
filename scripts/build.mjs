import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const srcPagesDir = path.join(projectRoot, 'src', 'pages');
const distDir = path.join(projectRoot, 'dist');

export function buildPortal() {
  fs.rmSync(distDir, { recursive: true, force: true });
  fs.cpSync(srcPagesDir, distDir, {
    recursive: true,
    filter: (src) => {
      const base = path.basename(src);
      return base !== '.git' && base !== 'Thumbs.db' && base !== '.DS_Store' && base !== 'desktop.ini';
    }
  });
  fs.writeFileSync(path.join(distDir, '.nojekyll'), '', 'utf8');

  let fileCount = 0;
  let totalBytes = 0;
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else {
        fileCount += 1;
        totalBytes += fs.statSync(full).size;
      }
    }
  };
  walk(distDir);

  return {
    distDir,
    fileCount,
    totalMB: (totalBytes / (1024 * 1024)).toFixed(2)
  };
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const result = buildPortal();
  console.log(`Built ${result.fileCount} files (${result.totalMB} MB) -> ${result.distDir}`);
}

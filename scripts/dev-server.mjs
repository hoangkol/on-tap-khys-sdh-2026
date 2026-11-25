import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8'
};

export function createPortalServer({ rootDir }) {
  const resolvedRoot = path.resolve(rootDir);

  return http.createServer((req, res) => {
    const reqUrl = new URL(req.url || '/', 'http://127.0.0.1');
    let pathname = '/';
    try {
      pathname = decodeURIComponent(reqUrl.pathname);
    } catch {
      res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Bad Request');
      return;
    }

    const relativePath = pathname.replace(/^\/+/, '');
    const targetPath = path.resolve(resolvedRoot, relativePath);

    if (targetPath !== resolvedRoot && !targetPath.startsWith(resolvedRoot + path.sep)) {
      res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Forbidden');
      return;
    }

    fs.stat(targetPath, (err, stat) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>404 - Không tìm thấy trang</h1><p><a href="/">← Quay về trang chủ</a></p>');
        return;
      }

      if (stat.isDirectory()) {
        if (!pathname.endsWith('/')) {
          const location = pathname + '/' + (reqUrl.search || '');
          res.writeHead(302, { Location: location });
          res.end();
          return;
        }
        const indexPath = path.join(targetPath, 'index.html');
        serveFile(indexPath, res);
        return;
      }

      serveFile(targetPath, res);
    });
  });
}

function serveFile(filePath, res) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h1>404 - Không tìm thấy tệp</h1><p><a href="/">← Quay về trang chủ</a></p>');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
}

function parseArgs(argv) {
  const opts = { root: 'src/pages', port: Number(process.env.PORT || 3000) };
  for (const arg of argv) {
    if (arg.startsWith('--root=')) opts.root = arg.slice('--root='.length);
    if (arg.startsWith('--port=')) opts.port = Number(arg.slice('--port='.length));
  }
  return opts;
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const { root, port } = parseArgs(process.argv.slice(2));
  const rootDir = path.resolve(projectRoot, root);
  const server = createPortalServer({ rootDir });

  server.listen(port, '127.0.0.1', () => {
    console.log(`Portal server running at http://127.0.0.1:${port}/ (serving ${root})`);
  });
}

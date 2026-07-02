import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const exportsDir = path.join(root, 'imports/figma-export/pages');
const assetsDir = path.join(root, 'public/assets/figma');

const URL_RE = /https:\/\/www\.figma\.com\/api\/mcp\/asset\/([a-f0-9-]+)/g;

async function collectUrls() {
  const urls = new Set();
  let files;
  try {
    files = await fs.readdir(exportsDir);
  } catch {
    console.log('No exports dir yet');
    return [];
  }
  for (const file of files) {
    if (!file.endsWith('.tsx') && !file.endsWith('.jsx')) continue;
    const content = await fs.readFile(path.join(exportsDir, file), 'utf8');
    for (const m of content.matchAll(URL_RE)) urls.add(m[0]);
  }
  return [...urls];
}

async function download(url) {
  const id = url.split('/').pop();
  const dest = path.join(assetsDir, `${id}.bin`);
  try {
    await fs.access(dest);
    return id;
  } catch {}
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} → ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await fs.writeFile(dest, buf);
  console.log('OK', id);
  return id;
}

await fs.mkdir(assetsDir, { recursive: true });
const urls = await collectUrls();
if (!urls.length) {
  console.log('No URLs found in exports');
  process.exit(0);
}
await Promise.all(urls.map(download));
console.log('Downloaded', urls.length, 'assets');

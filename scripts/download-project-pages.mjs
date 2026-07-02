import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const outDir = path.join(root, 'public/assets/projects');

const pages = {
  'project_1-full.png': 'https://www.figma.com/api/mcp/asset/8ed81759-d71a-4c94-b37a-ac27a8904df7',
  'project_2-full.png': 'https://www.figma.com/api/mcp/asset/1f3e3e3b-8954-4655-8120-80fd24383b20',
  'project_3-full.png': 'https://www.figma.com/api/mcp/asset/8f820e7f-1e94-4d9b-b45c-237714f8cbd6',
  'project_4-full.png': 'https://www.figma.com/api/mcp/asset/afc9f3d2-db56-4b94-9a6d-96045f4c3c77',
};

async function download(name, url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${name}: ${res.status}`);
  await fs.writeFile(path.join(outDir, name), Buffer.from(await res.arrayBuffer()));
  console.log('OK', name);
}

await fs.mkdir(outDir, { recursive: true });
await Promise.all(Object.entries(pages).map(([n, u]) => download(n, u)));
console.log('Done');

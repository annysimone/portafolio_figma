import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const outDir = path.join(root, 'public/assets/original');

const assets = {
  'home-pacifico.png': 'https://www.figma.com/api/mcp/asset/aedb8f3b-9c12-4eec-a768-4baeb26723c2',
  'home-gestion-horas.png': 'https://www.figma.com/api/mcp/asset/b2a01ebf-ea91-4773-aa53-a22b7c2728e6',
  'home-interbank.png': 'https://www.figma.com/api/mcp/asset/f2163201-50b6-4027-9155-22c57466aa8b',
  'home-appcres.png': 'https://www.figma.com/api/mcp/asset/32b25e90-13e2-4f01-9996-f9731700d698',
  'home-appcress.png': 'https://www.figma.com/api/mcp/asset/8b2803fb-f44c-4269-8003-4b997cf5e5ef',
  'avatar.png': 'https://www.figma.com/api/mcp/asset/7f084e63-63f0-4143-aa4c-06bb5cb13a06',
  'about-interbank.png': 'https://www.figma.com/api/mcp/asset/871c5f5e-85ad-456f-a357-47139fbf666c',
  'about-acres.png': 'https://www.figma.com/api/mcp/asset/55f5ad33-4019-4580-9f03-7358989ef8fd',
  'about-pacifico.png': 'https://www.figma.com/api/mcp/asset/5d9e6ff4-626b-4438-b605-0ac8cb8d29cc',
};

async function download(name, url) {
  const dest = path.join(outDir, name);
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await fs.writeFile(dest, buf);
    console.log('OK', name);
  } catch (e) {
    console.error('FAIL', name, e.message);
  }
}

await fs.mkdir(outDir, { recursive: true });
await Promise.all(Object.entries(assets).map(([name, url]) => download(name, url)));
console.log('Done');

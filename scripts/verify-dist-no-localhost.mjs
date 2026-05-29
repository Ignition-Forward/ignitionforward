import fs from 'node:fs';
import path from 'node:path';

if (process.env.VITE_API_URL) {
  console.log('[verify-dist-no-localhost] Skipped (VITE_API_URL set).');
  process.exit(0);
}

const distDir = path.join(process.cwd(), 'dist', '_astro');
if (!fs.existsSync(distDir)) {
  console.warn('[verify-dist-no-localhost] Skipped (dist/_astro not found).');
  process.exit(0);
}

const jsFiles = fs
  .readdirSync(distDir)
  .filter((file) => file.endsWith('.js'))
  .map((file) => path.join(distDir, file));

const needles = ['localhost:4003', 'http://localhost:4003', 'https://localhost:4003'];
const offenders = [];

for (const filePath of jsFiles) {
  const contents = fs.readFileSync(filePath, 'utf8');
  if (needles.some((needle) => contents.includes(needle))) offenders.push(path.basename(filePath));
}

if (offenders.length) {
  console.error(
    `[verify-dist-no-localhost] FAILED: found localhost:4003 in ${offenders.join(', ')}`
  );
  process.exit(1);
}

console.log('[verify-dist-no-localhost] OK: no localhost:4003 baked into dist.');


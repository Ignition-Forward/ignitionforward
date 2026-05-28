import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://ignitionforward.com',
  output: 'static',
  // Single-source the public assets with the legacy React app during migration.
  // Phase 9 will move these to ./public at the repo root.
  publicDir: './client/public',
  // Mirror the wouter Redirect from App.tsx (line 132) so /our-team -> /about
  // continues to work post-migration.
  redirects: {
    '/our-team': '/about',
  },
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    server: { host: true },
    // Match the React app's @ alias (vite.config.ts) so island components
    // that import @/lib/motion, @/components/*, etc. resolve to client/src.
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'client', 'src'),
      },
    },
  },
});

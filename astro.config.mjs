import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ignitionforward.com',
  output: 'static',
  // Single-source the public assets with the legacy React app during migration.
  // Phase 9 will move these to ./public at the repo root.
  publicDir: './client/public',
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    server: { host: true },
  },
});

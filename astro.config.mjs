// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Served at the apex custom domain (see public/CNAME). No base path needed;
  // internal links go through withBase() in src/data/site.ts, which resolves
  // to root here.
  site: 'https://avastardressage.com',
  vite: {
    plugins: [tailwindcss()]
  }
});
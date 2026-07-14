// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site. When a custom domain goes live, change `site`
  // to the domain and remove `base` (internal links use withBase from
  // src/data/site.ts, so they adapt automatically).
  site: 'https://cassie-lyn.github.io',
  base: '/JennWebsite',
  vite: {
    plugins: [tailwindcss()]
  }
});
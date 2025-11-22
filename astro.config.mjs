// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({

  // Public site URL (used by some integrations and canonical links)
  site: 'https://wired.github.io',
  base: '/portfolio-wired',
  vite: {
    plugins: [tailwindcss()]
  }
});
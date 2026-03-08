// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://thelevic.github.io',
  base: '/trigger-gap-outfitters',
  vite: {
    plugins: [tailwindcss()]
  }
});
// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://D-Barua.github.io',
  base: '/My_Profile_v1',
  vite: {
    plugins: [tailwindcss()]
  }
});
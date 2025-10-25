// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.kaelinfamily.com',
  output: 'server',
  adapter: vercel({}),

  integrations: [mdx(), sitemap()],
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['astro']
          }
        }
      }
    },

    plugins: [tailwindcss()]
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'never'
  }
});
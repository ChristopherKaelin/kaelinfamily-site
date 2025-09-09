// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.kaelinfamily.com',
  integrations: [mdx(), sitemap()],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});

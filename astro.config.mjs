import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const site = process.env.ASTRO_SITE || process.env.PUBLIC_SITE_URL || 'https://mariamgameel.github.io';
const base = process.env.ASTRO_BASE || undefined;

export default defineConfig({
  site,
  base,
  output: 'static',
  vite: {
    build: {
      chunkSizeWarningLimit: 1000
    }
  },
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          ar: 'ar-EG'
        }
      }
    })
  ]
});

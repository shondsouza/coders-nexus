// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:4321',
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        '@components': './src/components',
        '@layouts': './src/layouts',
        '@utils': './src/utils',
        '@styles': './src/styles',
        '@data': './src/data',
        '@content': './src/content'
      }
    }
  },
  devToolbar: {
    enabled: false
  }
});
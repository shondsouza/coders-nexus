// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://coderssdit.in',
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

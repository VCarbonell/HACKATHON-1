import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue'

var pathSrc = path.resolve(__dirname, "./src");

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use 'sass:math';
          @use 'sass:list';
          @use 'sass:map';
          @use 'sass:string';
          @use 'sass:color';
        `,
      },
    },
  },
  resolve: {
    alias: {
      '@': pathSrc,
    },
  },
  plugins: [vue()],
  server: {
    watch: {
      usePolling: true,
    }
  }
});

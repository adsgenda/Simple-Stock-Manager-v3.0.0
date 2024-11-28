import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@lang': path.resolve(__dirname, './lang'),
      '@r': path.resolve(__dirname, './resources'),
      '@': path.resolve(__dirname, './resources/js'),
      'ziggy-js': path.resolve('vendor/tightenco/ziggy'),
    },
  },
  build: {
    outDir: './public',
    emptyOutDir: false,
    sourcemap: process.env.NODE_ENV == 'development',
  },
  plugins: [
    laravel({
      input: 'resources/js/app.js',
      ssr: 'resources/js/ssr.js',
      refresh: true,
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
    VitePWA({
      strategies: 'generateSW', // 'generateSW' | 'injectManifest'
      injectRegister: 'auto',
      registerType: 'prompt',
      manifest: {
        start_url: '.',
        short_name: 'SSM',
        name: 'Stock Manager',
        display: 'standalone',
        background_color: '#111827',
        description: 'Simple Stock Manager by Tecdiary',
      },
    }),
  ],
});

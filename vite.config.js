import path from 'path';
import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import vue2 from "@vitejs/plugin-vue2";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2(),
    // legacy({
    //   targets: ["ie >= 11"],
    //   additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    // }),
  ],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      // these are the aliases and paths to them
      '@': path.resolve('./src')
    }
    // alias: [
    //   { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    //   { find: '@assets', replacement: fileURLToPath(new URL('./src/assets', import.meta.url)) },
    //   { find: '@stores', replacement: fileURLToPath(new URL('./src/stores', import.meta.url)) },
    // ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/main.scss";`,
      },
    },
  },
});

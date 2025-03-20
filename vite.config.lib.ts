import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';
import libCss from 'vite-plugin-libcss';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    libCss(),
    dts({
      entryRoot: './src/components/datepicker',
      beforeWriteFile: (filePath: string, content: string) =>
        filePath.endsWith('DatePickerComponent.vue.d.ts')
          ? {
              filePath: filePath.replace('DatePickerComponent.vue', 'vuejs3-datepicker2'),
              content,
            }
          : false,
    }),
  ],
  build: {
    minify: true,
    outDir: 'build',
    emptyOutDir: true,
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, './src/components/datepicker/DatePickerComponent.vue'),
      name: 'vuejs3-datepicker2',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});

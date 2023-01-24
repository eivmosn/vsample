import path from 'path'
import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import unocss from 'unocss/vite'
import autoimport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import i18n from '@intlify/unplugin-vue-i18n/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    jsx(),
    unocss(),
    autoimport({
      imports: [
        'vue',
        'pinia',
        '@vueuse/core',
      ],
      dts: true,
      vueTemplate: true,
    }),
    components({
      resolvers: [
        NaiveUiResolver(),
      ],
      dts: true,
      include: [/\.vue$/, /\.tsx$/],
    }),
    i18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

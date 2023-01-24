import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import unocss from 'unocss/vite'
import autoimport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
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
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

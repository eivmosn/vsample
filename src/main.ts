import { createApp } from 'vue'
import { router } from './router'
import App from './App'
import { i18n, pinia } from './plugins'

import 'uno.css'
import './styles/main.css'

const app = createApp(App)
app.use(pinia)
app.use(i18n)
app.use(router)
app.mount('#app')

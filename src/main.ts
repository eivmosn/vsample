import { createApp } from 'vue'
import { router } from './router'
import App from './App'

import 'uno.css'
import './styles/main.css'

const app = createApp(App)
app.use(router)
app.mount('#app')

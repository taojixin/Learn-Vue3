import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'normalize.css'
import '@/assets/css/index.less'
import pinia from './store'

import './services/modules/home'

const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')

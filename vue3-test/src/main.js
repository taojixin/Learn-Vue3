import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局样式
// import './assets/css/global.css'

// 引入自定义指令
import loadingDirective from '@/components/base-ui/loading/directive'

createApp(App).use(store).use(router).directive('loading', loadingDirective).mount('#app')

import { createApp } from 'vue'
import router from './router'
// @ts-ignore
import App from './App.vue'

const app = createApp(App)

app.use(router)

app.mount('#app')

// 简写：链式调用，use本身返回的就是app对象
// createApp(App).use(router).mount("#app")

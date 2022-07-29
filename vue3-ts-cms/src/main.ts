import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'

import 'normalize.css'
import './assets/css/index.css'
// 全局引入elementPlus
import ElementPlus from 'element-plus'
// 引入了所有的样式
import 'element-plus/dist/index.css'
// 封装的axios
// import tjxRequest from './service'

const app = createApp(App)
app.use(store)
setupStore()
app.use(router)
app.use(ElementPlus)
app.mount('#app')

// console.log(process.env.VUE_APP_BASE_URL)

// tjxRequest.request({
//   url: '/home/mulidata',
//   method: 'GET'
// 是否显示loading：默认有
// showLoading: false
// })
// tjxRequest.request({
//   url: '/home/mulidata',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的config')
//       return config
//     },
//     responseInterceptorCatch: (res) => {
//       console.log('单独响应的response')
//       return res
//     }
//   }
// })

// type DataType = {
//   data: any
//   returnCode: string
//   success: boolean
// }
// tjxRequest
//   .get<DataType>({
//     url: '/home/mulidata'
//   })
//   .then((res) => {
//     console.log(res.data)
//     console.log(res.returnCode)
//     console.log(res.success)
//   })

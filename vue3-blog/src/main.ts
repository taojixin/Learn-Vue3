import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ynRequest from './service'
// 导入element-plus及其样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// css样式初始化
import 'normalize.css'
import './assets/css/index.css'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')

interface DataType {
  data: any
  meta: any
}

// ynRequest.request({
//   url: '/api/comment/getcomments',
//   method: 'GET'
// })
ynRequest
  .request<DataType>({
    url: '/api/comment/getcomments',
    method: 'GET',
    interceptors: {
      requestInterceptor: (config) => {
        console.log('单独请求的config')
        return config
      },
      responseInterceptor: (res) => {
        console.log('单独响应的拦截器')
        return res
      }
    },
    // 是否需要loading
    showLoading: true
  })
  .then((res) => {
    res.data
  })

// 统一出口
import TJXRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const tjxRequest = new TJXRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 例子：携带token的拦截
      // const token = ''
      // if (token) {
      //   config.headers.Authorization = `Bearer ${token}`
      // }
      console.log('请求成功的拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('请求失败的拦截')
      return err
    },
    responseInterceptor: (res) => {
      console.log('响应成功的拦截')
      // 仅仅返回数据，不要其他如config等东西
      return res.data
    },
    responseInterceptorCatch: (err) => {
      console.log('响应失败的拦截')
      return err
    }
  }
})

export default tjxRequest

import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { YNRequestConfig, YNRequestInterceptors } from './type'
import { ElLoading } from 'element-plus'

class YNRequest {
  instance: AxiosInstance // AxiosInstance为axios的实例类型
  insterceptors?: YNRequestInterceptors // 是否可传入自定义的拦截器
  showLoading: boolean
  loading?: any

  constructor(config: YNRequestConfig) {
    this.instance = axios.create(config)
    this.insterceptors = config.interceptors
    this.showLoading = config.showLoading ?? false

    // 单个实例的拦截器
    this.instance.interceptors.request.use(
      this.insterceptors?.requestInterceptor,
      this.insterceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.insterceptors?.responseInterceptor,
      this.insterceptors?.requestInterceptorCatch
    )

    // 所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('所有实例都有的拦截器：请求拦截成功')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求...',
            background: 'rgba(0, 0, 0, 0.5'
          })
        }
        return config
      },
      (err) => {
        // console.log('所有实例都有的拦截器：请求拦截失败')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // console.log('所有实例都有的拦截器：响应拦截成功')
        // 移除loading
        this.loading?.close()
        return res.data
      },
      (err) => {
        // console.log('所有实例都有的拦截器：响应拦截成功')
        // 移除loading
        this.loading?.close()
        return err
      }
    )
  }

  request<T>(config: YNRequestConfig<T>): Promise<T> {
    // 返回的promise需要一个类型
    return new Promise((resolve, reject) => {
      // 给某个单独的请求添加拦截器
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      // loading
      if (config.showLoading === true) {
        this.showLoading = true
      }
      this.instance
        .request<any, T>(config)
        // res为T类型
        .then((res) => {
          // 1.单个请求数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // 2.再设置回来，这样才不会影响下一个请求
          this.showLoading = false
          // 3.将结果返回
          resolve(res)
        })
        .catch((err) => {
          // 再设置回来，这样才不会影响下一个请求
          this.showLoading = false
          reject(err)
        })
    })
  }

  get<T>(config: YNRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: YNRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: YNRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T>(config: YNRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default YNRequest

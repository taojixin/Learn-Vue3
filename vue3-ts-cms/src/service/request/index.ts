import axios from 'axios'
import type { AxiosInstance } from 'axios'
// 定义的这两个类型用于拓展interceptors能够传入各种拦截器
import type { TJXRequestInterceptors, TJXRequestConfig } from './type'

import { ElLoading } from 'element-plus'

class TJXRequest {
  // instance用于保存axios实例，用于每new一个TJXRequest都是一个独立的实例，使他们的属性方法独立，如baseREL等， AxiosInstance为axios实例的类型
  instance: AxiosInstance
  // 用于保存传入的拦截器，可选的，可传入可不传入
  interceptors?: TJXRequestInterceptors
  showLoading: boolean
  loading?: any

  constructor(config: TJXRequestConfig) {
    this.instance = axios.create(config)
    // 是否需要loading ??:左边有值返回左边的值，没有则使用右边的值
    this.showLoading = config.showLoading ?? true
    // 获取传入的拦截器并保存
    this.interceptors = config.interceptors
    // 请求拦截器
    this.instance.interceptors.request.use(
      // 响应成功执行的函数
      this.interceptors?.requestInterceptor,
      // 响应失败执行的函数
      this.interceptors?.requestInterceptorCatch
    )
    // 响应拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    //添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有的实例都有的拦截器: 请求拦截成功')
        // 添加请求动画
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在加载',
            background: 'rgba(0, 0, 0, .5'
          })
        }
        return config
      },
      (err) => {
        console.log('所有的实例都有的拦截器: 请求拦截失败')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // 移除loading
        setTimeout(() => {
          this.loading?.close()
        }, 1000)

        console.log('所有的实例都有的拦截器: 响应拦截成功')
        return res
      },
      (err) => {
        // 移除loading
        setTimeout(() => {
          this.loading?.close()
        }, 1000)
        console.log('所有的实例都有的拦截器: 响应拦截失败')
        // 例子：判断不同的HttpErrorCode显示不同的错误信息
        if (err.response.status === 404) {
          console.log('404错误')
        }
        return err
      }
    )
  }

  request<T>(config: TJXRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单个请求的拦截器
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      // 是否要showLoading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            config = config.interceptors.responseInterceptor(res)
          }
          // 将showLoading设置为true，这样不会影响下一个请求
          this.showLoading = true
          // 将结果resolve返回出去
          resolve(res)
        })
        .catch((err) => {
          // 将showLoading设置为true，这样不会影响下一个请求
          this.showLoading = true
          reject(err)
          return err
        })
    })
  }

  get<T>(config: TJXRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: TJXRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: TJXRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T>(config: TJXRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default TJXRequest

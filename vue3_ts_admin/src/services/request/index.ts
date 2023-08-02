import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { YRequestConfig } from './type'
import { localCache } from '@/utils/cache'

class YRequest {
  instance: AxiosInstance
  constructor(config: YRequestConfig) {
    this.instance = axios.create(config)
    // 全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        const token = localCache.getCache('token')
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (config) => {
        return config.data
      },
      (err) => {
        return err
      }
    )
    // 可选拦截器
    this.instance.interceptors.request.use(
      config.interceptor?.requestSuccessFn,
      config.interceptor?.requestFailureFn
    )
    this.instance.interceptors.response.use(
      config.interceptor?.responseSuccessFn,
      config.interceptor?.responseFailureFn
    )
  }

  request(config: YRequestConfig) {
    return this.instance.request(config)
  }

  get(config: YRequestConfig) {
    return this.request({ ...config, method: 'GET' })
  }
  post(config: YRequestConfig) {
    return this.request({ ...config, method: 'POST' })
  }
  delete(config: YRequestConfig) {
    return this.request({ ...config, method: 'DELETE' })
  }
}

export default YRequest

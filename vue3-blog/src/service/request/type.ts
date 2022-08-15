// AxiosRequestConfig为axios.create()需要传入的配置类型
// AxiosResponse为响应拦截器类型
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface YNRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: any) => any
}
export interface YNRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: YNRequestInterceptors<T>
  showLoading?: boolean
}

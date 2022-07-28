import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 定义一个TJXRequestInterceptors 类型其中 可以 有各种拦截器成功或失败的执行函数
export interface TJXRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: T) => T
  // responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}
// 拓展 AxiosRequestConfig 类型，给它增加新的属性 interceptors 使它可以保存拦截器执行函数，最终目的让用户可以传入拦截器执行函数
export interface TJXRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: TJXRequestInterceptors<T>
  showLoading?: boolean
}

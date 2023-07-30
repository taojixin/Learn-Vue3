import type { InternalAxiosRequestConfig, AxiosRequestConfig, AxiosResponse } from 'axios'

export interface YIntersecptors {
  requestSuccessFn: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  requestFailureFn: (config: any) => any
  responseSuccessFn: (config: AxiosResponse) => AxiosResponse
  responseFailureFn: (config: any) => any
}
export interface YRequestConfig extends AxiosRequestConfig {
  interceptor?: YIntersecptors
}

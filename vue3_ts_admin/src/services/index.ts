import { BASE_URL, TIME_OUT } from './config'
import YRequest from './request'

const yRequest = new YRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default yRequest

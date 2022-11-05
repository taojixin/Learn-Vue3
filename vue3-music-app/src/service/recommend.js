import { get } from './base'

export function getRecommend() {
  return get('/getRecommend')
}
import hyRequest from "@/service/request/index"

export function getHomeHotSuggests() {
  return hyRequest.get({url: '/home/hotSuggests'})
}

export function getHomeCategories() {
  return hyRequest.get({
    url: '/home/categories'
  })
}

export function getHomeHouselist() {
  return hyRequest.get({
    url: '/home/houselist',
    params: {
      page: 1
    }
  })
}
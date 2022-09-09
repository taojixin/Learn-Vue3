import hyRequest from "@/service/request/index"

export function getHomeHotSuggests() {
  return hyRequest.get({url: '/home/hotSuggests'})
}
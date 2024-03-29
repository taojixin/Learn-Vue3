import { defineStore } from "pinia";
import { getHomeHotSuggests, getHomeCategories, getHomeHouselist } from "@/service";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories:[],
    houselist: [],
    currentPage: 1
  }),
  actions: {
    async fetchHotSuggestsData() {
      const res = await getHomeHotSuggests()
      this.hotSuggests = res.data
    },
    async ftechCategoriesData() {
      const res = await getHomeCategories()
      this.categories = res.data
    },
    async fetchHouselistData() {
      const res = await getHomeHouselist(this.currentPage)
      this.houselist.push(...res.data)
      this.currentPage++
    }
  }
})

export default useHomeStore
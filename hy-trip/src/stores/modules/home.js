import { defineStore } from "pinia";
import { getHomeHotSuggests } from "@/service";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories:[]
  }),
  actions: {
    async fetchHotSuggestsData() {
      const res = await getHomeHotSuggests()
      this.hotSuggests = res.data
      console.log(res.data);
    }
  }
})

export default useHomeStore
import {defineStore} from 'pinia'

const useHome = defineStore('home', {
  state:() => ({
    banners: [],
    recommends: []
  }),
  actions: {
    async fetchHomeMultidata() {
      const res = await fetch('http://123.207.32.32:8000/home/multidata')
      const data = await res.json()
      this.banners = data.data.banner.list
      this.recommends = data.data.recommends.list
      return undefined
    }
  }
})

export default useHome
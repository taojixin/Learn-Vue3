import { defineStore } from "pinia";

const useUser = defineStore("user", {
  state: () => ({
    name: 'tjx',
    age: 18,
    level: 100
  })
})


export default useUser

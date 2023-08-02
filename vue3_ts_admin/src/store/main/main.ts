import { defineStore } from 'pinia'

const useMainStore = defineStore('main', {
  state: () => ({
    entireDepartments: [],
    entireRoles: [],
    entireMenus: []
  }),
  actions: {
    async fetchEntireDataAction() {}
  }
})

export default useMainStore

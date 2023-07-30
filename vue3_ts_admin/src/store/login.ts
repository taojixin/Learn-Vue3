import { defineStore } from 'pinia'
import { accountLogin } from '@/services/modules/login'

const useLoginStore = defineStore('login', {
  state: () => ({
    token: '',
    userInfo: {},
    userMenus: [],
    permissions: []
  }),
  actions: {
    async accountLoginAction(account: any) {
      const loginRes = await accountLogin(account)
      console.log(loginRes)
    }
  }
})

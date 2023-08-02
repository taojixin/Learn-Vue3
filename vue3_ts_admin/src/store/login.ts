import { defineStore } from 'pinia'
import { accountLogin, getRoleMenus, getUserById } from '@/services/modules/login'
import { localCache } from '@/utils/cache'
import router, { addRoutesWithMenu } from '@/router'
import { mapMenuToPerssions } from '@/utils/map-menu'
import useMainStore from './main/main'

interface ILoginState {
  token: string
  userInfo: any
  userMenus: any[]
  permissions: string[]
}

const useLoginStore = defineStore('login', {
  state: (): ILoginState => ({
    token: '',
    userInfo: {},
    userMenus: localCache.getCache('userMenus') ?? [],
    permissions: []
  }),
  actions: {
    async accountLoginAction(account: any) {
      const loginRes = await accountLogin(account)
      const { id, token } = loginRes.data
      // 保存token
      this.token = token
      localCache.setCache('token', token)
      // 获取用户信息
      const userRes = await getUserById(id)
      this.userInfo = userRes.data
      localCache.setCache('userInfo', this.userInfo)
      //   根据role的id获取菜单
      const roleId = this.userInfo.role.id
      const menuRes = await getRoleMenus(roleId)
      this.userMenus = menuRes.data
      localCache.setCache('userMenus', this.userMenus)
      //   保存权限信息
      const permissions = mapMenuToPerssions(this.userMenus)
      this.permissions = permissions
      localCache.setCache('permission', this.permissions)
      console.log('sdfd', permissions)
      //   获取所有的数据
      //   动态添加路由
      addRoutesWithMenu(this.userMenus)
      //   跳转到首页
      router.push('/main')
    },
    loadLocalDataAction() {
      this.token = localCache.getCache('token')
      this.userInfo = localCache.getCache('userInfo')
      this.userMenus = localCache.getCache('userMenus')
      this.permissions = localCache.getCache('permissions')
      if (this.token && this.userMenus) {
        addRoutesWithMenu(this.userMenus)
        // const mainStore = useMainStore()
        // mainStore.fetchEntireDataAction()
      }
    }
  }
})

export default useLoginStore

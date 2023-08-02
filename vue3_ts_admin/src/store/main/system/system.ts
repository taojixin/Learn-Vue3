import { defineStore } from 'pinia'
import type { ISystemState } from './type'
import { getUserListData } from '@/services/modules/main/system'

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    usersTotalCount: 0,
    usersList: [],
    pageList: [],
    pageTotalCount: 0
  }),
  actions: {
    async getUserListDataAction(queryInfo: any) {
      const userListResult = await getUserListData(queryInfo)
      const { list, totalCount } = userListResult.data
      this.usersList = list
      this.usersTotalCount = totalCount
    }
  }
})

export default useSystemStore

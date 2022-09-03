// 定义一个关于counter的store
import { defineStore } from 'pinia'
import useUser from './user'

const useCounter = defineStore('counter', {
  state: () => ({
    count: 100,
    friends: [
      { id: 111, name: 'yn'},
      { id: 222, name: 'tjx'},
      { id: 333, name: 'lo'},
    ]
  }),
  getters: {
    // 1.基本使用
    doubleCount(state) {
      return state.count * 2
    },
    // 2.一个getter引入另一个getter
    doubleCountAddOne() {
      // this为store实例
      // return this.doubleCount + 1
    },
    // 3.getters也支持返回一个函数
    getFridenById(state) {
      return function(id) {
        for (let i = 0; i<state.friends.length;i++) {
          const friend = state.friends[i]
          if (friend.id === id) {
            return friend
          }
        }
      }
    },
    // 4.getter用到了别的store中的数据
    showMessage(state) {
      // 1.获取user信息
      const userStore = useUser()
      // 2.获取自己信息
      // 3.拼接信息
      return `name: ${userStore.name}-count:${state.count}`
    }
  },
  actions: {
    increment() {
      // 通过this访问，不会传入state
      this.count++
    },
    incrementNum(num) {
      this.count += num
    }
  }
})

export default useCounter
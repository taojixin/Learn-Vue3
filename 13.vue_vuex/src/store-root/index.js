import { createStore } from "vuex"
import { INCREMENT_N } from './mutation-types'
import axios from 'axios'

const store = createStore({
  state() {
    return {
      counter: 0,
      name: 'tjx',
      age: 18,
      height: 180,
      books: [
        { name: '深入js', price: 200, count: 3 },
        { name: '深入webpack', price: 240, count: 5 },
        { name: '深入react', price: 130, count: 1 },
        { name: '深入Node', price: 220, count: 3 },
      ],
      discount: 0.5,
      banners: []
    }
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    [INCREMENT_N](state, payload) {
      state.counter += payload.n
    },
    addBannerData(state, payload) {
      state.banners = payload
    }
  },
  getters: {
    totalPrice(state, getters) {
      let totalPrice = 0;
      for (const book of state.books) {
        totalPrice += book.count * book.price
      }
      return totalPrice * getters.currentDiscount
    },
    currentDiscount(state) {
      return state.discount * 0.9
    },
    // 为了getter接受参数，可以return一个函数，此时传递参数
    totalPriceCountGreaterN(state, getters) {
      return function (n) {
        let totalPrice = 0;
        for (const book of state.books) {
          if (book.count <= n) continue
          totalPrice += book.count * book.price
        }
        return totalPrice * getters.currentDiscount
      }
    },
    nameInfo(state) {
      return `name: ${state.name}`
    },
    ageInfo(state) {
      return `age: ${state.age}`
    },
    heightInfo(state) {
      return `height: ${state.height}`
    }
  },
  actions: {
    // 参数
    incrementAction(context, payload) {
      console.log(payload);
      setTimeout(() => {
        context.commit("increment")
      }, 1000)
    },
    // context
    decrementAction(context) {
      console.log(context);
    },
    // 异步请求
    getHomeMultidata(context) {
      return new Promise((resolve, reject) => {
        axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
          context.commit("addBannerData", res.data.data.banner.list)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })

    }
  }
});


export default store
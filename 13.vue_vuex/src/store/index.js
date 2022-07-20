import { createStore } from "vuex"
import {INCREMENT_N} from './mutation-types'

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
      discount: 0.5
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
          if (book.count <=n) continue
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
  }
});


export default store
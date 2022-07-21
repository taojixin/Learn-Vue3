const homeModule = {
  namespaced: true,
  state() {
    return {
      homeCounter: 100
    }
  },
  getters: {
    doubleHomeCounter(state) {
      // doubleHomeCounter(state, getters, rootState, rootGetters) {
      return state.homeCounter * 2
    }
  },
  mutations: {
      increment(state) {
        state.homeCounter++
      }
  },
  actions: {
    incrementAction({context}) {
      // incrementAction({context, dispatch, state, rootState, getters, rootGetters}) {
      context.commit("increment")
      // context.commit("increment", null, {root: true}) // 表示此次的提交是对根进行的提交
      
      // dispatch("increment", null, {root: true})
    }
  }
}

export default homeModule
<template>
  <div>
    <h2>当前计数：{{ $store.state.counter }}</h2>
    <button @click="incrementAction">+1</button>
    <button @click="decrementAction">-1</button>
    <hr>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  methods: {
    // 数组写法
    ...mapActions(['incrementAction', 'decrementAction']),
    // 对象写法
    ...mapActions({
      add: 'incrementAction',
      sub: 'decrementAction'
    })
  },
  setup() {
    const actions = mapActions(['incrementAction', 'decrementAction'])
    const actions2 = mapActions({
      add: 'incrementAction',
      sub: 'decrementAction'
    })
    return {
      ...actions,
      ...actions2
    }
  }
};
</script>

<style scoped>
</style>
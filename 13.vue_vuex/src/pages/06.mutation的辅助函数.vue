<template>
  <div>
    <h2>当前计数：{{ $store.state.counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <button @click="increment_n({n:10})">+10</button>
    <hr>
  </div>
</template>

<script>
import {INCREMENT_N} from '../store/mutation-types'
import { mapMutations} from 'vuex'
export default {
  methods: {
    // ...mapMutations(['increment', 'decrement', INCREMENT_N]),
    // addTen() {
    //   this.increment_n({n:10})
    // }
  },
  setup() {
    const stateMutations = mapMutations(['increment', 'decrement', INCREMENT_N])

    return {
      ...stateMutations
    }
  }
};
</script>

<style scoped>
</style>
<template>
  <div>
    <h2>当前计数：{{ $store.state.counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <hr>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      // this.$store.dispatch('incrementAction', {count: 100})
      // 另外一种提交方式
      this.$store.dispatch({
        type: 'incrementAction',
        count: 100
      })
    },
    decrement() {
      this.$store.dispatch('decrementAction')
    }
  },
  mounted() {
    this.$store.dispatch("getHomeMultidata")
  },
  setup() {
    
    return {
    }
  }
};
</script>

<style scoped>
</style>
<template>
  <div>
    <h2>Home: {{$store.state.counter}}</h2>
    <h2>Home: {{sCounter}}</h2>
    <h2>Home: {{sNamge}}</h2>
    <h2>Home: {{age}}</h2>
    <h2>Home: {{height}}</h2>
  </div>
</template>

<script>
import {mapState} from "vuex"
  export default {
    computed: {
      // sCounter() {
      //   return this.$store.state.counter
      // },
      // 辅助函数mapState返回的是一个对象
      // 1.数组写法
      // ...mapState(["counter", "name", "age", "height"])
      // 2.对象写法:可以重命名
      ...mapState({
        sCounter: state => state.counter,
        sNamge: state => state.name
      })
    }
  }
</script>

<style scoped>

</style>
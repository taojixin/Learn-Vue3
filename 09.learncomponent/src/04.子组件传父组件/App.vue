<template>
  <div>
    <h2>当前计数：{{counter}}</h2>
    <!-- 父组件通过v-on(@)的方式传入要监听的事件名称，并绑定到对应的方式中去 -->
    <counter-operation @add="addOne" @sub="subOne" @addN="addNum"></counter-operation>
  </div>
</template>

<script>
import CounterOperation from "./CounterOperation.vue"
  export default {
    data() {
      return {
        counter: 0
      }
    },
    components: {
      CounterOperation
    },
    methods: {
      addOne() {
        this.counter++
      },
      subOne() {
        this.counter--
      },
      // 传递的参数n
      addNum(n) {
        this.counter += n
      }
    }
  }
</script>

<style scoped>

</style>
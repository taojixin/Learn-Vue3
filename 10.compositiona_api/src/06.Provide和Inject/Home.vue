<template>
  <div>
    <h2>{{name}}</h2>
    <h2>{{counter}}</h2>
    <button @click="homeIncrement">home++</button>
  </div>
</template>

<script>
import {inject} from "vue"
  export default {
    setup() {
      // inject有两个参数，第二个参数为默认值
      const name = inject("name")
      const counter = inject("counter")

      const homeIncrement = () => counter.value++
      return {
        name,
        counter,
        homeIncrement
      }
    }
  }
</script>

<style scoped>

</style>
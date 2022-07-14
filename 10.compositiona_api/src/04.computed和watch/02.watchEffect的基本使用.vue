<template>
  <div>
    <h2>{{name}}-{{age}}</h2>

    <button @click="changeName">name</button>
    <button @click="changeAge">age</button>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'
  export default {
    setup() {
      // watchEffect：自动收集响应式的依赖
      const name = ref("tjx")
      const age = ref(18)

      const changeName = () => name.value = "kobe"
      const changeAge = () => age.value++

      // 默认一开始的时候就会执行一次
      watchEffect(() => {
        console.log(name.value,age.value);
      })


      return {
        name,
        age,
        changeName,
        changeAge
      }
    }
  }
</script>

<style scoped>
</style>
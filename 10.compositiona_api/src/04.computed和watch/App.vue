<template>
  <div>
    <h2>{{ fullName }}</h2>
    <button @click="changeName">修改firstName</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
  export default {
    setup() {
      const fistName = ref("Kobe")
      const lastName = ref("Bryant")

      // 用法一：传入一个getter函数 computed返回的是一个ref对象
      // const fullName = computed(() => fistName.value + lastName.value)

      // 用法二：传入一个对象，对象包含getter和setter
      const fullName = computed({
        get: () => fistName.value + lastName.value,
        set(newValue) {
          const names = newValue.split(" ")
          fistName.value = names[0]
          lastName.value = names[1]
        }
      })

      const changeName = () => {
        // fistName.value = 'James'
        // 因为computed返回值是一个ref所以要使用 .value
        fullName.value = "hello tjx"
      }

      return {
        fullName,
        changeName
      }
    }
  }
</script>

<style scoped>
</style>
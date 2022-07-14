<template>
  <div>
    <button @click="counterAdd">{{counter}}</button>
  </div>
</template>

<script>
import {onMounted, onUpdated, onUnmounted, ref} from 'vue'
  export default {
    setup() {
      onMounted(() => {
        console.log("app mounted");
      })
      onUpdated(() => {
        console.log("app updated");
      })
      onUnmounted(() => {
        console.log("app unmounted");
      })

      const counter = ref(0)
      const counterAdd = () => {
        counter.value++
      }

      return {
        counter,
        counterAdd
      }
    }
  }
</script>

<style scoped>

</style>
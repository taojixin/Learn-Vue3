<template>
  <div>
    <button @click="btnClick">按钮点击</button>
  </div>
</template>

<script>
import emmiter from "./eventbus"
  export default {
    methods: {
      btnClick() {
        // 触发事件
        emmiter.emit("tjx", {name: "tjx", age: 18})
      }
    }
  }
</script>

<style scoped>

</style>
<template>
  <div>
  </div>
</template>

<script>
import emitter from "./eventbus"
  export default {
    created() {
      // 监听事件
      emitter.on("tjx", (info) => {
        console.log(info);
      })
      // 监听所有事件 type:事件类型 tjx info:参数
      emitter.on("*", (type, info) => {
        console.log(type, info);

      })
    }
  }
</script>

<style scoped>

</style>
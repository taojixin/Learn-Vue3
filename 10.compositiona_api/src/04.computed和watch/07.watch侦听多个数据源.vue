<template>
  <div>
    <h2 ref="title">哈哈哈</h2>
    <button @click="changeDate">修改</button>
  </div>
</template>

<script>
import { reactive,  ref,  watch } from "vue";
export default {
  setup() {
    // 定义可响应式对象
    const info = reactive({name: 'tjx', age: 18})
    const name = ref("tjx")

    // 侦听器：侦听多个对象通过 []
    // watch([info, name], (newValue, oldValue) => {
    watch([() => ({...info}), name], (newValue, oldValue) => {
      console.log("newValue:", newValue, "oldValue", oldValue);
    })

    const changeDate = () => {
      info.name = "yinnan"
    }

    return {
      changeDate,
      info
    }
  },
};
</script>

<style scoped>
</style>
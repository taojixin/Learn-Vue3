<template>
  <div>
    <h2>{{ info }}</h2>
    <button @click="changeInfo">修改age</button>
  </div>
</template>

<script>
import {  shallowRef, triggerRef } from "vue";
export default {
  setup() {
    const info = shallowRef({name: 'tjx'})

    const changeInfo = () => {
      // ref默认情况下是深层响应式
      // info.value.name = 'james'
      // 为了让他是浅层的响应式，我们可以使用shallowRef
      info.value.name = "james"

      // triggerRef用于手动触发这个浅层的ref为深层的ref
      triggerRef(info)
    }



    return {
      info,
      changeInfo
    };
  },
};
</script>

<style scoped>
</style>
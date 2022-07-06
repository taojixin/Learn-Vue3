<template>
  <div>
    <h2>{{ message }}</h2>
    <h2>{{ messagea }}</h2>

    <h2>counter: {{ sate.counter }}</h2>
    <button @click="addNum">+1</button>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },

  // setup(props, context) {
  setup() {
    // 需要进行响应式的数据放到reactive中,使用时需要sate. 的方式
    const sate = reactive({
      counter: 100
    })
    // 局部函数
    const addNum = () => {
      sate.counter++;
      // counter改变了，但是界面中h2中的counter没有改变，不是响应式的，通过reactive实现响应式
      console.log(sate.counter);
    };
    return {
      messagea: "return setup",
      sate,
      addNum,
    };
  },
};
</script>

<style scoped>
</style>
<template>
  <div>
    <h2>{{ message }}</h2>
    <h2>{{ messagea }}</h2>

    <h2>counter: {{counter}}</h2>
    <button @click="addNum">+1</button>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },

  // setup(props, context) {
  setup() {
    let counter = 100;
    // 局部函数
    const addNum = () => {
      counter++
      // counter改变了，但是界面中h2中的counter没有改变，不是响应式的
      console.log(counter);
    }
    return {
      messagea: "return setup",
      counter,
      addNum
    }

  },
};
</script>

<style scoped>
</style>
<template>
  <div>
    <h2>{{ message }}</h2>
    <h2>{{ messagea }}</h2>

    <!-- 当在template中使用ref会自动解包，不能counter.value，直接counter就可以了 -->
    <h2>counter: {{ counter }}</h2>
    <button @click="addNum">+1</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },

  setup() {
    let counter = ref(100)
    // 局部函数
    const addNum = () => {
      // 使用时还是需要 counter.value的方式
      counter.value++;
      console.log(counter.value);
    };
    return {
      messagea: "return setup",
      counter,
      addNum,
    };
  },
};
</script>

<style scoped>
</style>
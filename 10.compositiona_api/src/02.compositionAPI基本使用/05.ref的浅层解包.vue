<template>
  <div>
    <h2>{{ message }}</h2>
    <h2>{{ messagea }}</h2>

    <!-- 当在template中使用ref会自动解包，不能counter.value，直接counter就可以了 -->
    <h2>counter: {{ counter }}</h2>
    <!-- ref是浅层解包，当ref被一个对象包裹时，还是需要使用.value的方式进行使用 -->
    <h2>counter: {{ info.counter.value }}</h2>
    <!-- 当ref最外层是被reactive所包裹时，这是它又会进行解包 -->
    <h2>counter: {{ reactiveInfo.counter }}</h2>
    <button @click="addNum">+1</button>
  </div>
</template>

<script>
import { ref,reactive } from "vue";
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },

  setup() {
    let counter = ref(100)

    const info = {
      counter
    }

    const reactiveInfo = reactive({
      counter
    })
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
      info,
      reactiveInfo
    };
  },
};
</script>

<style scoped>
</style>
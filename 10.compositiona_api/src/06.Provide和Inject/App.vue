<template>
  <div>
    <home></home>
    <h2>"app counter" {{counter}}</h2>
    <button @click="increment">app++</button>
  </div>
</template>

<script>
import { provide, ref, readonly } from "vue";
import Home from "./Home.vue";
export default {
  components: {
    Home,
  },
  setup() {
    const name = ref("tjx");
    let counter = ref(100);

    // 为了实现单项数据流（子不能改变父数据）这里可以通过readonly
    provide("name", readonly(name));
    provide("counter", readonly(counter));

    const increment = () => counter.value++;

    return {
      increment,
      counter
    };
  },
};
</script>

<style scoped>
</style>
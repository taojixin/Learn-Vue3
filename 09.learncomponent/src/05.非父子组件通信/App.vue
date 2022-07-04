<template>
  <div>
    <home></home>
    <button @click="addName">addName</button>
  </div>
</template>

<script>
import Home from "./Home.vue";
import {computed} from "vue"
export default {
  components: {
    Home,
  },
  // 基本使用
  // provide: {
  //   name: "tjx",
  //   age: 18
  // }
  // 写成一个函数就可以调用data中的数据
  provide() {
    return {
      name: "tjx",
      age: 18,
      // 如何让这里变成响应式的？ 使用computed函数
      length: computed(() => this.names.length)
    };
  },
  data() {
    return {
      names: ["agc", "bsd"]
    }
  },
  methods: {
    addName() {
      this.names.push("tjxyn")
    }
  }
};
</script>

<style scoped>
</style>
<template>
  <div class="app">
    <teleport to="#tjx">
      <h2>当前计数</h2>
      <button>+1</button>
      <hello-world></hello-world>
    </teleport>

    <!-- 都会放到tjx中去 -->
    <teleport to="#tjx">
      <h2>hhhhh</h2>
    </teleport>
  </div>
</template>

<script>
import {getCurrentInstance} from "vue"
import HelloWorld from "./HelloWorld.vue"
export default {
  components: {
    HelloWorld
  },
  mounted() {
    console.log(this.$name);
  },
  setup() {
    // 在setup中获取全局属性
    const instance = getCurrentInstance();
    console.log(instance.appContext.config.globalProperties.$name);
  }
};
</script>

<style scoped>
</style>
<template>
  <div>
    <h2>{{ name }}-{{ age }}</h2>

    <button @click="changeName">name</button>
    <button @click="changeAge">age</button>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
export default {
  setup() {
    // watchEffect：自动收集响应式的依赖
    const name = ref("tjx");
    const age = ref(18);

    const stop = watchEffect(() => {
      console.log(name.value, age.value);
    });

    const changeName = () => (name.value = "kobe");
    const changeAge = () => {
      age.value++
      if (age.value > 25) {
        stop()
      }
    }

    return {
      name,
      age,
      changeName,
      changeAge,
    };
  },
};
</script>

<style scoped>
</style>
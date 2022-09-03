<template>
  <div class="home">
    <h2>home view</h2>
    <h2>count: {{ counterStore.count }}</h2>
    <button @click="changeState">修改state</button>
  </div>
</template>

<script setup>
import useCounter from "../stores/counter";
import useHome from "../stores/home";

const counterStore = useCounter();
function changeState() {
  // counterStore.increment();
  counterStore.incrementNum(100);
}
const homeStore = useHome();
homeStore.fetchHomeMultidata().then((res) => {
  console.log("成功:", res);
});
</script>

<style lang="scss" scoped>
</style>
<template>
  <div class="home">
    <h2>home view</h2>
    <h2>count: {{ counterStore.count }}</h2>
    <h2>count : {{ count }}</h2>
    <button @click="incrementCount">+1</button>
  </div>
</template>

<script setup>
import useCounter from "../stores/counter";
// import { toRefs } from "vue";
import { storeToRefs } from "pinia";

const counterStore = useCounter();

// 可以解构，但是解构之后没有响应式
// const { count } = counterStore;
// 1.可以使用vue提供的toRefs使解构也具有响应式
// const { count } = toRefs(counterStore);
// 2.可以使用pinia提供的storeToRefs
const { count } = storeToRefs(counterStore);

function incrementCount() {
  counterStore.count++;
}
</script>

<style lang="scss" scoped>
</style>
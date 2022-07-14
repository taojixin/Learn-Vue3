<template>
  <div>
    <hello-world></hello-world>
    <h2>{{ counter }}</h2>
    <button @click="increment">+</button>
  </div>
</template>


<script setup>
import { ref } from "vue";
import HelloWorld from "./HelloWorld.vue"
const counter = ref(0);
const increment = () => counter.value++;
</script>

<style scoped>
</style>
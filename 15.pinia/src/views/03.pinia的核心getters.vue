<template>
  <div class="home">
    <h2>home view</h2>
    <h2>doubleCount: {{ counterStore.doubleCount }}</h2>
    <h2>doubleCountAddOne: {{ counterStore.doubleCountAddOne }}</h2>
    <h2>getFridenById-111: {{ counterStore.getFridenById(111) }}</h2>
    <h2>showMessage: {{ counterStore.showMessage }}</h2>
    <button @click="changeState">修改state</button>
    <button @click="resetState">重置state</button>
  </div>
</template>

<script setup>
import useCounter from "../stores/counter";

const counterStore = useCounter();
</script>

<style lang="scss" scoped>
</style>
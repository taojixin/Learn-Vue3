<template>
  <div class="main">
    sf
    <h2>{{ counterStore.counter }}</h2>
  </div>
</template>

<script setup lang="ts">
import useCounterStore from '@/store/counter'

const counterStore = useCounterStore()
</script>

<style lang="less" scoped>
.main {
}
</style>

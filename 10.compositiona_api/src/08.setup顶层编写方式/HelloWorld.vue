<template>
  <div>
    <h2>{{props.message}}</h2>
  </div>
</template>

<script setup>
  import {defineProps} from "vue"
  const props = defineProps({
    message: {
      type: String,
      default: '哈哈哈'
    }
  })
</script>

<style scoped>

</style>
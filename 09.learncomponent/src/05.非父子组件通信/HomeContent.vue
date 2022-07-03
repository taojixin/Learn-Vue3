<template>
  <div>
    <h2>{{name}} {{age}} {{length}}</h2>
  </div>
</template>

<script>
  export default {
    inject: ["name", "age", "length"]
  }
</script>

<style scoped>

</style>
<template>
  <div>
    <h2 v-format-time="'YYYY/MM/DD'">{{timestamp}}</h2>
  </div>
</template>

<script>
  export default {
    setup() {
      const timestamp = 1624452193;

      return {
        timestamp
      }
    }
  }
</script>

<style scoped>

</style>
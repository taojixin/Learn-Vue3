<template>
  <div>
    <h2>{{title}}</h2>
    <h2>{{content}}</h2>
  </div>
</template>

<script>
import BasePage from "./BasePage.vue"
  export default {
    extends: BasePage,
    data() {
      return {
        content: "content"
      }
    }
  }
</script>

<style scoped>

</style>
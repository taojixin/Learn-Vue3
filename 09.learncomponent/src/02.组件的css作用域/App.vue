<template>
  <div>
    <h2>app</h2>
    <helloworld></helloworld>
  </div>
</template>

<script>
import Helloworld from "./Helloworld.vue"
  export default {
    components: {
      Helloworld
    }
    
  }
</script>

<style scoped>
h2 {
  color: red;
}
</style>
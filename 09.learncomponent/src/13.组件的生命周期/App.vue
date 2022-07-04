<template>
  <div>
    <button @click="isShow = !isShow">切换</button>
    <template v-if="isShow">
      <home></home>
    </template>
  </div>
</template>

<script>
import Home from "./Home.vue"
  export default {
    components: {
      Home
    },
    data() {
      return {
        isShow: true
      }
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
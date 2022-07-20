<template>
  <div>
    <!-- {{}} 中不用写this -->
    <h2>user:{{$route.params.username}}</h2>
  </div>
</template>

<script>
import {useRoute, } from 'vue-router'
  export default {
    created() {
      console.log(this.$route.params.username);
      console.log(this.$route);
    },
    // setup中如何获取route对象：通过useRoute方法，vue-route4.x开始
    setup() {
      const route = useRoute() // 返回该组件对应的route对象
      console.log(route.params.username);
      console.log(route);
    }
  }
</script>

<style scoped>

</style>
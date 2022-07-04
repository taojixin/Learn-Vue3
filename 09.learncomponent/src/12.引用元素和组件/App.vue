<template>
  <div>
    <h2 ref="haha">haha</h2>
    <button @click="btnClick">get</button>
    <nav-bar ref="navBar"></nav-bar>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue"
  export default {
    components: {
      NavBar
    },
    data() {
      return {
        names: ['abc','csb']
      }
    },
    methods: {
      btnClick() {
        console.log(this.$refs.haha);
        console.log(this.$refs.navBar.message);
        this.$refs.navBar.sayHello();
      }
    }
  }
</script>

<style scoped>

</style>
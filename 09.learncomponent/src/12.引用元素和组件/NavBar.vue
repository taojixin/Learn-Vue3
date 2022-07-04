<template>
  <div>
    <h2>navBar</h2>
    <button @click="getCom">获取父组件和根组件</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: "nvabarsmessage"
      }
    },
    methods: {
      sayHello() {
        console.log("sayHello");
      },
      getCom() {
        console.log(this.$parent.names);
        console.log(this.$root.names);
      }
    }
  }
</script>

<style scoped>

</style>
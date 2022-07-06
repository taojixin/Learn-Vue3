<template>
  <div>
    <h2>{{message}}</h2>
    <button @click="foo">按钮</button>
  </div>
</template>

<script>
import {demoMixin} from "./mixins/demoMixin.js"
  export default {
    mixins: [demoMixin],
    data() {
      return {
        title: "hello world",
      }
    },
    created() {
      console.log("fsdlfjsdlf");
    }
  }
</script>

<style scoped>

</style>

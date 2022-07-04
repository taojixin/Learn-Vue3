<template>
  <div>
    <!-- <input type="text" v-model="message"> -->

    <!-- 组件上使用v-model -->
    <!-- <tjx-input v-model="message"></tjx-input> -->
    <!-- <tjx-input :modelValue="message" @update:model-value="message = $event"></tjx-input> -->

    <!-- 绑定两个v-model -->
    <tjx-input v-model="message" v-model:title="title"></tjx-input>

    <h1>{{message}}</h1>
    <h2>{{title}}</h2>

    
  </div>
</template>

<script>
import TjxInput from "./TjxInput.vue"
  export default {
    data() {
      return {
        message: "hello world",
        title: "dsfsd"
      }
    },
    components: {
      TjxInput
    }
  }
</script>

<style scoped>

</style>
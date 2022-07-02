<template>
  <div>
    <!-- 方式一 -->
    <show-message title="hhaha" content="dfls"></show-message>
    <!-- 方式二 -->
    <show-message :title="title" :content="content"></show-message>
    <show-message title="hhaha" content="dfls"></show-message>
  </div>
</template>

<script>
import ShowMessage from './ShowMessage.vue'
  export default {
    components: {
      ShowMessage
    },
    data() {
      return {
        title: "班底改变",
        content: "a;fsdk"
      }
    }
    
  }
</script>

<style scoped>

</style>
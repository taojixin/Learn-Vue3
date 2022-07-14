<template>
  <div>
    <h2 ref="title">哈哈哈</h2>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
export default {
  setup() {
    const title = ref(null)

    watchEffect(() => {
      console.log(title.value);
    }, {
      // pre:提前执行（默认） post:等挂载完成后再执行
      flush: "pre"
    })

    return {
      title
    }
  },
};
</script>

<style scoped>
</style>
<template>
  <!-- v-loading:[loadingText] 动态指令参数 -->
  <div class="div" v-loading:[loadingText]="isShow"></div>
</template>
<script setup>
import { ref } from "vue";

// import Loading from "@/components/base-ui/loading/loading.vue";
let isShow = ref(true);
setTimeout(() => {
  isShow.value = false;
}, 3000);
let loadingText = "正在加载...";
</script>
<style lang="less">
.div {
  width: 500px;
  height: 500px;
  background-color: black;
}
</style>

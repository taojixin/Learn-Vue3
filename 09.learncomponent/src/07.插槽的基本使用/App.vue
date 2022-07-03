<template>
  <div>
    <!-- 基本使用 -->
    <my-slog-cpn>
      <button>我是按钮</button>
    </my-slog-cpn>
    <!-- 插入自己的组件 -->
    <my-slog-cpn>
      <my-button></my-button>
    </my-slog-cpn>
    <!-- 插槽默认值 -->
    <my-slog-cpn> </my-slog-cpn>
    <!-- 插入很多内容 -->
    <my-slog-cpn>
      <!-- 所有内容都替换插槽 -->
      <h2>哈哈哈</h2>
      <button>按钮</button>
      <strong>strong</strong>
    </my-slog-cpn>
  </div>
</template>

<script>
import MySlogCpn from "./MySlotCpn.vue";
import MyButton from "./MyButton.vue";
export default {
  components: {
    MySlogCpn,
    MyButton,
  },
};
</script>

<style scoped>
</style>
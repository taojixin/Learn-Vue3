<!-- 自定义loading指令 -->

<template>
  <div class="loading">
    <div class="loading-content">
      <img src="./loading.gif" width="24" height="24" alt="" />
      <p class="desc">{{ title }}</p>
    </div>
  </div>
</template>

<script setup></script>
<script>
export default {
  data() {
    return {
      title: "正在输入...",
    };
  },
  methods: {
    setTitle(title) {
      this.title = title;
    },
  },
};
</script>

<style lang="less" scoped>
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .loading-content {
    text-align: center;
    .desc {
      line-height: 20px;
      font-size: 12px;
      color: black;
    }
  }
}
</style>

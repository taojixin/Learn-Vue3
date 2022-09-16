<template>
  <div class="section">
    <div class="header">
      <div class="title">{{ title }}</div>
    </div>
    <div class="content">
      <slot>
        <h3>默认</h3>
      </slot>
    </div>
    <div class="footer">
      <div class="more">{{ moreText }}</div>
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    typeof: String,
    default: "默认标题",
  },
  moreText: {
    type: String,
    default: "查看全部",
  },
});
</script>

<style lang="less" scoped>
.section {
  padding: 0 15px;
  margin-top: 12px;
  background-color: #fff;
  border-top: 5px solid #f2f3f4;

  .header {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;

    .title {
      font-size: 20px;
      color: #333;
    }
  }

  .content {
    padding: 8px 0;
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    height: 44px;
    align-items: center;
    line-height: 44px;
    color: #ff9645;
    font-size: 14px;
    font-weight: 600;
  }
}
</style>
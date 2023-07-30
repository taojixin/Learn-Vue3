<template>
  <div class="login"><LoginPanel /></div>
</template>

<script setup lang="ts">
import LoginPanel from '@/views/login/c-cpns/login-panel.vue'
</script>

<style lang="less" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('../../assets/img/login-bg.svg');
  width: 100%;
  height: 100%;
}
</style>

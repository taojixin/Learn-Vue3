<template>
<!-- 修改a标签的class，默认为router-link-active -->
  <!-- <router-link to="/home" active-class="tjx">home</router-link> -->
  <router-link to="/home">home</router-link>
  <router-link to="/about">about</router-link>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  setup() {

  }
};
</script>

<style>
/* router-link实际是a标签，同时会给a标签添加class便于用户更改样式 class="router-link-active router-link-exact-active" */
.router-link-active {
  color: red;
}
</style>

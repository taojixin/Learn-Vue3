<template>
  <RouterView></RouterView>
  <!-- 通过meta控制tabbar的显示与隐藏 -->
  <!-- <tabbar v-if="!$route.meta.tabBarHidden"></tabbar> -->
  <tabbar></tabbar>
</template>

<script setup>
import tabbar from './components/tab-bar/tab-bar.vue'
</script>

<style scoped>
</style>

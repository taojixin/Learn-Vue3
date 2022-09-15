<template>
  <div class="app">
    <router-view></router-view>
    <!-- 是否隐藏tabbar -->
    <tabbar v-if="!route.meta.hideTabBar"></tabbar>

    <loading />
  </div>
</template>

<script setup>
import tabbar from "./components/tab-bar/tabbar.vue";
import Loading from "./components/loading/loading.vue";

import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style scoped>
</style>

<template>
  <div class="home">
    <home-nav-bar></home-nav-bar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <home-search-box />
  </div>
</template>

<script setup>
import useHomeStore from "@/stores/modules/home";
import { ref } from "@vue/reactivity";
import HomeNavBar from "./cpns/home-nav-bar.vue";
import HomeSearchBox from "./cpns/home-search-box.vue";

// 发送网络请求
const homeStore = useHomeStore();
homeStore.fetchHotSuggestsData();
</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}
</style>
<template>
  <div class="home">
    <home-nav-bar></home-nav-bar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <home-search-box />
    <home-categories />
    <home-content />
  </div>
</template>

<script setup>
import useHomeStore from "@/stores/modules/home";
import HomeNavBar from "./cpns/home-nav-bar.vue";
import HomeSearchBox from "./cpns/home-search-box.vue";
import HomeCategories from "./cpns/home-categories.vue";
import HomeContent from "./cpns/home-content.vue";

// 发送网络请求
const homeStore = useHomeStore();
homeStore.fetchHotSuggestsData();
homeStore.ftechCategoriesData();
homeStore.fetchHouselistData();
</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}
</style>
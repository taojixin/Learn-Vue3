<template>
  <div class="home">
    <home-nav-bar></home-nav-bar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <home-search-box />
    <home-categories />

    <div v-show="isShowSearchBar" class="home-top">
      <search-bar
        start-date="07.25"
        end-date="07.26"
        height="45px"
        key-word-font-size="14px"
        :search-icon="true"
        key-word="关键字/位置/民宿"
      ></search-bar>
    </div>

    <home-content />
  </div>
</template>

<script setup>
import useHomeStore from "@/stores/modules/home";
import HomeNavBar from "./cpns/home-nav-bar.vue";
import HomeSearchBox from "./cpns/home-search-box.vue";
import HomeCategories from "./cpns/home-categories.vue";
import HomeContent from "./cpns/home-content.vue";
import { onMounted, onUnmounted, ref, watch, computed } from "vue";
import useScroll from "@/hooks/useScroll";
import SearchBar from "@/components/search-bar/search-bar.vue";

// 发送网络请求
const homeStore = useHomeStore();
homeStore.fetchHotSuggestsData();
homeStore.ftechCategoriesData();
homeStore.fetchHouselistData();

// // 监听window创建的滚动
// const scrollListenerHandler = () => {
//   const clientHeight = document.documentElement.clientHeight;
//   const scrollTop = document.documentElement.scrollTop;
//   const scrollHeight = document.documentElement.scrollHeight;
//   if (clientHeight + scrollTop >= scrollHeight) {
//     homeStore.fetchHouselistData();
//   }
// };
// // 挂载的时候添加监听
// onMounted(() => {
//   window.addEventListener("scroll", scrollListenerHandler);
// });
// // 卸载的时候移除监听
// onUnmounted(() => {
//   window.removeEventListener("scroll", scrollListenerHandler);
// });

const { isReachBottom, scrollTop } = useScroll();
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouselistData().then(() => {
      isReachBottom.value = false;
    });
  }
});

// 搜索框显示的控制
// const isShowSearchBar = ref(false);
// watch(scrollTop, (newTop) => {
//   isShowSearchBar.value = newTop > 100;
// });
const isShowSearchBar = computed(() => {
  return scrollTop.value >= 100;
});
</script>

<style lang="less" scoped>
.home {
  padding-bottom: 50px;
}

.banner {
  img {
    width: 100%;
  }
}

.home-top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 16px 16px 10px 16px;
  background-color: white;
  z-index: 100;
}
</style>
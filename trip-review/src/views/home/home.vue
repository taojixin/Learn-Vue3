<template>
  <div class="home">
    <!-- 顶部 -->
    <home-nav-bar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <!-- 位置 -->
    <home-search-box />
    <home-categories />

    <!-- 顶部滚动显示与隐藏 -->
    <div class="home-top" v-show="isShowSearchBar">
      <search-bar start-date="07.25" end-date="07.26" height="45px" key-word-font-size="14px" :search-icon="true"
        key-word="关键字/位置/民宿"></search-bar>
    </div>



    <!-- 内容 -->
    <home-content />

  </div>
</template>

<script setup>
import HomeNavBar from './cpns/home-nav-bar.vue'
import HomeSearchBox from './cpns/home-search-box.vue'
import HomeCategories from './cpns/home-categories.vue'
import HomeContent from './cpns/home-content.vue'
import SearchBar from '@/components/search-bar/search-bar.vue'
import useScroll from '@/hooks/useScroll'

import useHomeStore from '@/stores/modules/home';
import { watch,computed } from 'vue'



// 发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggestsData()
homeStore.fetchCategoriesData()
homeStore.fetchHouselistData()

// 到达最底部加载
const { isReachBottom, scrollTop } = useScroll()
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouselistData().then((res) => {
      isReachBottom.value = false
    })
  }
})
// 显示与隐藏
const isShowSearchBar = computed(() => {
  return scrollTop.value >= 100
})
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
</style>
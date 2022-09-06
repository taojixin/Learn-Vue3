<template>
  <div class="city">
    <!-- 搜索 -->
    <van-search
      v-model="searchValue"
      placeholder="城市/区域/位置"
      shape="round"
      show-action
      @cancel="cancelClick"
    />

    <!-- tab切换 -->
    <van-tabs v-model:active="tabActive" color="#ff9854" line-height="3px">
      <template v-for="(value, key) in allCities" :key="key">
        <van-tab :title="value.title">内容 1</van-tab>
      </template>
      <!-- <van-tab :title="allCity?.cityGroup.title">内容 1</van-tab>
      <van-tab :title="allCity?.cityGroupOverSea.title">内容 2</van-tab> -->
    </van-tabs>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
// import { getCityAll } from "@/service";
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";

const router = useRouter();

// 搜索功能
const searchValue = ref("");
const cancelClick = () => {
  router.back();
};

// tab切换
const tabActive = ref();

// 网络请求：请求城市的数据
// const allCity = ref({});
// getCityAll().then((res) => {
//   allCity.value = res.data;
// });

// 从store中获取数据
const cityStore = useCityStore();
cityStore.fetchAllCitiesData();
const { allCities } = storeToRefs(cityStore); // 使用soteToRefs使数据成为响应式
</script>

<style lang="less" scoped>
</style>
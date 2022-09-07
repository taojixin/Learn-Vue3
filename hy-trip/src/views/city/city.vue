<template>
  <div class="city">
    <div class="top">
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
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
        <!-- <van-tab :title="allCity?.cityGroup.title">内容 1</van-tab>
      <van-tab :title="allCity?.cityGroupOverSea.title">内容 2</van-tab> -->
      </van-tabs>
    </div>

    <div class="content">
      <!-- <city-group :group-data="currentGroup"></city-group> -->
      <template v-for="(value, key, index) in allCities" :key="index">
        <city-group v-show="tabActive === key" :group-data="value"></city-group>
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
// import { getCityAll } from "@/service";
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";

import CityGroup from "./cpns/city-group.vue";

const router = useRouter();

// 搜索功能
const searchValue = ref("");
const cancelClick = () => {
  router.back();
};

// tab切换
const tabActive = ref();

// 从store中获取数据
const cityStore = useCityStore();
cityStore.fetchAllCitiesData();
const { allCities } = storeToRefs(cityStore); // 使用soteToRefs使数据成为响应式

// 获取选择标签后的数据
const currentGroup = computed(() => allCities.value[tabActive.value]);
</script>

<style lang="less" scoped>
.city {
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
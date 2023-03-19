<template>
    <div class="city top-page">
        <div class="top">
            <!-- 搜索 -->
            <van-search v-model="searchValue" placeholder="城市/区域/位置" shape="round" show-action @cancel="cancelClick" />

            <!-- tab切换 -->
            <van-tabs v-model:active="tabActive" color="#ff9854" line-height="3px">
                <template v-for="(value, key) in allCities" :key="key">
                    <van-tab :title="value.title" :name="key"></van-tab>
                </template>
            </van-tabs>
        </div>

        <div class="content">
            <template v-for="(value, key, index) in allCities" :key="index">
                <city-group v-show="tabActive === key" :group-data="value"></city-group>
            </template>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city';
import CityGroup from './cpns/city-group.vue'



const router = useRouter()

// 搜索
const searchValue = ref("")
const cancelClick = () => {
    router.back()
}

// tab切换
const tabActive = ref()

// 从store中获取数据
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)


// 通过meta控制tabbar的显示与隐藏
// const route = useRoute()
// route.meta.tabBarHidden = false
</script>

<style lang="less" scoped>
.city {
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}</style>
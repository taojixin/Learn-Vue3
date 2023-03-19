<template>
  <div class="detail top-page">
    <van-nav-bar title="房屋详情" @click-left="$router.back()" left-text="路途" left-arrow />


    <div class="main">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics" />
      <detail-infos :top-infos="mainPart.topModule" />
      <detail-facility
        :house-facility="mainPart.dynamicModule?.facilityModule?.houseFacility"
      />
    </div>
  </div>
</template>

<script setup>
import { ref,computed } from 'vue';
import {getDetailInfos} from '@/services'
import { useRoute, useRouter } from 'vue-router';
import DetailSwipe from './cpns/detail-swipe.vue';
import DetailInfos from './cpns/detail-infos.vue';
import detailFacility from './cpns/detail-facility.vue';

// 得到传递过来的houseId
const router = useRouter()
const route = useRoute()
const houseId = route.params.id
console.log(houseId);

// 获取数据
const detailInfos = ref({})
const mainPart = computed(() => detailInfos.value.mainPart)
getDetailInfos(houseId).then((res) => {
  detailInfos.value = res.data
})
</script>

<style lang="less" scoped>
.tabs {
  position: fixed;
  z-index: 9;
  left: 0;
  right: 0;
  top: 0;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>
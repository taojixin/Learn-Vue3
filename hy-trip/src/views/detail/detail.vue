<template>
  <div class="detail top-page">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click="onClickLeft"
    ></van-nav-bar>

    <div class="main" v-if="mainPart">
      <detail-swipe
        :swipe-data="mainPart.topModule.housePicture.housePics"
      ></detail-swipe>
    </div>
  </div>
</template>

<script setup>
import DetailSwipe from "./cpns/detail-swipe.vue";
import { useRoute, useRouter } from "vue-router";
import { getDetailInfos } from "@/service";
import { ref, computed } from "vue";

const router = useRouter();
const route = useRoute();
const houseId = route.params.id;

// 发送网络请求
const detailInfos = ref({});
const mainPart = computed(() => detailInfos.value.mainPart);
getDetailInfos(houseId).then((res) => {
  detailInfos.value = res.data;
});

// 监听返回按钮的点击
const onClickLeft = () => {
  router.back();
};
</script>

<style lang="less" scoped>
</style>
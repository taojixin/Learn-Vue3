<template>
  <div class="home-search-box">
    <!-- 位置信息 -->
    <div class="location">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>

    <!-- 日期范围 -->
    <div class="section date-range">
      <div class="start">
        <div class="data">
          <span class="tip">入住</span>
          <span class="time">8月25日</span>
        </div>
        <div class="stay">共一晚</div>
      </div>
      <div class="end">
        <div class="data">
          <span class="tip">离店</span>
          <span class="time">8月26日</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const router = useRouter();

// 获取位置
// const positionClick = () => {
//   navigator.geolocation.getCurrentPosition(
//     (res) => {
//       console.log(res);
//     },
//     (err) => {
//       console.log("获取失败");
//     },
//     {
//       enableHighAccuracy: true,
//       timeout: 5000,
//       maximumAge: 0,
//     }
//   );
// };

const cityClick = () => {
  router.push("/city");
};

// 当前城市
const cityStore = useCityStore();
const { currentCity } = storeToRefs(cityStore);
</script>

<style lang="less" scoped>
.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {
    flex: 1;
    color: #333;
    font-size: 15px;
  }
  .position {
    width: 74px;
    display: flex;
    align-items: center;

    .text {
      position: relative;
      top: 2px;
      font-size: 12px;
      color: #666;
    }

    img {
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }
}

.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;

  .start {
    flex: 1;
    display: flex;
    height: 44px;
    align-items: center;
  }

  .end {
    min-width: 30%;
    padding-left: 20px;
  }

  .date {
    display: flex;
    flex-direction: column;

    .tip {
      font-size: 12px;
      color: #999;
    }

    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}

.date-range {
  height: 44px;
  .stay {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
  }
}
</style>
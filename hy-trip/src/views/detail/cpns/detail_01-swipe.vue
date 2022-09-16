<template>
  <div class="swipe">
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
      <template v-for="item in swipeData" :key="item">
        <van-swipe-item class="item">
          <img :src="item.url" alt="" />
        </van-swipe-item>
      </template>

      <template #indicator="{ active }">
        <div class="indicator">
          <template v-for="(value, key, index) in swipeGroup" :key="index">
            <span
              class="item"
              :class="{ active: swipeData[active]?.enumPictureCategory == key }"
            >
              <span class="text">{{ getName(value[0].title) }}</span>
              <span
                class="count"
                v-if="swipeData[active]?.enumPictureCategory == key"
                >{{ getCategoryIndex(swipeData[active]) }}/{{
                  value.length
                }}</span
              >
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
const props = defineProps({
  swipeData: {
    type: Array,
    default: () => [],
  },
});

// 对数据进行转换
const swipeGroup = {};
for (const item of props.swipeData) {
  let valueArray = swipeGroup[item.enumPictureCategory];
  if (!valueArray) {
    valueArray = [];
    swipeGroup[item.enumPictureCategory] = valueArray;
  }
  valueArray.push(item);
}

// 定义转换数据的方法
const getName = (name) => {
  return name.replace("：", "").replace("】", "").replace("【", "");
};

const getCategoryIndex = (item) => {
  const valueArray = swipeGroup[item.enumPictureCategory];
  return valueArray.findIndex((data) => data === item) + 1;
};
</script>

<style lang="less" scoped>
.swipe {
  .swipe-list {
    .item {
      img {
        width: 100%;
      }
    }

    .indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      display: flex;
      padding: 2px 5px;
      font-size: 12px;
      background: rgba(0, 0, 0, 0.1);
      .item {
        margin: 0 3px;
        &.active {
          padding: 0 3px;
          border-radius: 5px;
          background-color: #fff;
          color: #333;
        }
      }
    }
  }
}
</style>
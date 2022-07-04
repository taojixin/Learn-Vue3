<template>
  <div>
    <suspene>
      <template #defautl>
        <async-category></async-category>
      </template>
      <template #fallback>
        <loading></loading>
      </template>
    </suspene>
  </div>
</template>

<script>
import {defineAsyncComponent} from 'vue'
import Loading from "./utils/Loading.vue"

// import AsyncCategory from "./utils/AsyncCategory.vue"
// 写法一：
const AsyncCategory = defineAsyncComponent(() => import('./utils/AsyncCategory.vue'))
// 写法二：
  // const AsyncCategory = defineAsyncComponent({
  //   loader: () => import('./utils/AsyncCategory.vue'),
  //   // 当AsyncCategory还未加载下来时，使用Loading组件占位
  //   loadingComponent: Loading,
  //   // 加载失败时显示这个组件
  //   errorComponent: Loading,
  //   // 延迟 显示loading组件之前，等待多长事件
  //   delay: 2000,
  //   // err:错误信息 retry:函数，调用retry尝试重新加载 attempts：记录尝试的次数
  //   // onError: function(err, retry, attempts) {

  //   // }
  // })

  export default {
    components: {
      AsyncCategory,
      Loading
    }
  }
</script>

<style scoped>

</style>
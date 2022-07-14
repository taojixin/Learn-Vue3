<template>
  <div>
    <h2 ref="title">哈哈哈</h2>
    <button @click="changeDate">修改</button>
  </div>
</template>

<script>
import { reactive, watch } from "vue";
export default {
  setup() {
    // 定义可响应式对象
    const info = reactive({
      name: "tjx",
      age: 18,
      friend: {
        name: 'yinnan'
      }
    });

    // 侦听器：默认可以深度侦听
    // watch(info, (newValue, oldValue) => {
    //   console.log("newValue:", newValue, "oldValue", oldValue);
    // });
    // 但是通过这种解构的方式就不能进行深度侦听
    watch(() => ({...info}), (newValue, oldValue) => {
      console.log("newValue:", newValue, "oldValue", oldValue);
    }, {
      deep: true, // 深度侦听
      immediate: true, // 立即执行
    });

    const changeDate = () => {
      info.friend.name = "yinnanlover";
    };

    return {
      changeDate,
      info,
    };
  },
};
</script>

<style scoped>
</style>
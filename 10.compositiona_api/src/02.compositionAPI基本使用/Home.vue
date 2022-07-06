<template>
  <div>
    <button @click="updateState">+1</button>
  </div>
</template>

<script>
import { readonly,ref,reactive } from "vue";
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },

  setup() {
    // 普通对象
    const info = {name: "tjx"}
    const readonlyInfo = readonly(info)

    // 响应式对象
    const info2 = reactive({
      name: 'tjx'
    })
    const readonlyInfo2 = readonly(info)

    // 响应式对象
    const info3 = ref({
      name: 'tjx'
    })
    const readonlyInfo3 = readonly(info)

    const updateState = () => {
      readonlyInfo.name = 'coder'
      console.log(info);
      readonlyInfo2.name = 'coder'
      console.log(info2);
      readonlyInfo3.value = 'coder'
      console.log(info3);
    };
    return {
      updateState
    };
  },
};
</script>

<style scoped>
</style>
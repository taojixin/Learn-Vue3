<template>
  <div>
    <h2>{{ title }}</h2>
    <h2>{{ content.name }}</h2>
    <h2>{{ content.age }}</h2>
  </div>
</template>

<script>
export default {
  // 数组和对象
  // 1.数组 只能告诉名称，直接通过名称使用
  // props: ["title", "content"]

  // 2.对象 可以指定名称以及类型等
  props: {
    title: String,
    content: {
      type: Object,
      // 必传
      // required: true,
      // 默认值 当type为Object时这里提示default要为function
      default() {
        return {
          name: "",
          age: 0,
        };
      },
    },
  },
};
</script>

<style scoped>
</style>
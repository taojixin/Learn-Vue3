<template>
  <div>
    <h2>{{title}}</h2>
    <h2>{{content}}</h2>
  </div>
</template>

<script>
  export default {
    // 数组和对象
    // 1.数组 只能告诉名称
    // props: ["title", "content"]
    // 2.对象 可以指定名称以及类型等
    props: {
      title: String,
      content: {
        type: String,
        // 必传
        required: true,
        // 默认值
        default: "默认值"
      }
    }
  }
</script>

<style scoped>

</style>
<template>
  <div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <input type="text" v-model.number="num" />
    <button @click="incrementN">+n</button>
  </div>
</template>

<script>
export default {
  methods: {
    // 注册需要触发的时间
    // 1.数组写法 （定义事件名）
    // emits: ["add", "sub", "addN"],
    // 2.对象写法 （可以对传递的参数进行验证）
    // 定义事件名
    emits: {
      add: null,
      sub: null,
      addN: payload => {
        // 验证参数是否符合要求
        if (payload > 10) {
          // 为true时传递
          return true
        }
        return false
      }
    },
    // 子组件通过监听按钮的点击事件，然后通过$emit的方式将事件发送出去
    increment() {
      this.$emit("add");
    },
    decrement() {
      this.$emit("sub");
    },
    incrementN() {
      // 传递参数
      this.$emit("addN", this.num)
    },
  },
  data() {
    return {
      num: 0,
    };
  },
};
</script>

<style scoped>
</style>
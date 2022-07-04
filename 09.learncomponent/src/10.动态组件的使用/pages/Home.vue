<template>
  <div @click="divClick">Home组件 {{name}}-{{age}}</div>
</template>

<script>
export default {
  name: "home",
  props: {
    name: {
      type: String
    },
    age: {
      type: Number
    }
  },
  emits: ['pageClick'],
  methods: {
    divClick() {
      this.$emit("pageClick")
    }
  }
};
</script>

<style scoped>
</style>
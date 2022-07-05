<template>
  <div>
    <button @click="isShow = !isShow">显示与隐藏</button>
    <transition name="tjx">
      <h2 v-if="isShow">hello world</h2>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow: true
      }
    }
  }
</script>

<style scoped>
.tjx-enter-from,
.tjx-leave-to {
  opacity: 0;
}

.tjx-enter-to,
.tjx-leave-from {
  opacity: 1;
}

.tjx-enter-active,
.tjx-leave-active {
  transition: opacity 2s ease;
}
</style>
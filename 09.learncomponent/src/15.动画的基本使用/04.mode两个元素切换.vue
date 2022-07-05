<template>
  <div>
    <div><button @click="isShow = !isShow">显示与隐藏</button></div>

    <transition name="tjx" mode="in-out">
      <h2 v-if="isShow" class="title">hello world</h2>
      <h2 v-else class="title">hello yn</h2>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
.title {
  display: inline-block;
}

.tjx-enter-from,
.tjx-leave-to {
  opacity: 0;
}

.tjx-enter-active,
.tjx-leave-active {
  transition: opacity 2s ease;
}

.tjx-enter-active {
  animation: bounce 1s ease;
}
.tjx-leave-active {
  animation: bounce 1s ease reverse;
}
@keyframes bounce {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
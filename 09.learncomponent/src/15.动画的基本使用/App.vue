<template>
  <div>
    <div><button @click="isShow = !isShow">显示与隐藏</button></div>

    <!-- appear:刚开始就进行一次动画 -->
    <transition name="tjx" mode="out-in" :appear="true">
      <component :is="isShow ? 'home' : 'about'"></component>
    </transition>
  </div>
</template>

<script>
import Home from "./pages/Home.vue"
import About from "./pages/About.vue"
export default {
  data() {
    return {
      isShow: true,
    };
  },
  components: {
    Home,
    About
  }
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
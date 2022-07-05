<template>
  <div>
    <div><button @click="isShow = !isShow">显示与隐藏</button></div>

    <!-- appear:刚开始就进行一次动画 -->
    <!-- <transition name="tjx" mode="out-in"> -->
    <transition enter-active-class="animate__animated animate__fadeInDown" leave-active-class="animate__animated animate__flipInY">
      <h2 class="title" v-if="isShow">heoodfsls</h2>
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


/* .tjx-enter-active
 {
  animation: bounceInUp 1s ease-in;
}
.tjx-leave-active {
  animation: bounceInUp 1s ease-in reverse;
} */

</style>
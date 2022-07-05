<template>
  <div>
    <div><button @click="isShow = !isShow">显示与隐藏</button></div>

    <!-- :css="false" 不再执行css动画 -->
    <transition @enter="enter" @leave="leave" :css="false">
      <h2 class="title" v-if="isShow">heoodfsls</h2>
    </transition>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    enter(element, done) {
      console.log("enter");
      // gsap.to(element, {})
      gsap.from(element, {
        scale: 0,
        x: 200, // translateX:200px
        onComplete: done,
      });
    },
    leave(element, done) {
      console.log("leave");
      gsap.to(element, {
        scale: 0,
        x: 200, // translateX:200px
        onComplete: done,
      });
    },
  },
};
</script>

<style scoped>
.title {
  display: inline-block;
}
</style>
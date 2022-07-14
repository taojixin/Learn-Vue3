<template>
  <div>
    <h2>{{ counter }}</h2>
    <h2>{{ doubleCounter }}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>

    <p class="content"></p>
    <div class="scroll">
      <div class="scroll-x">scrollX:{{ scrollx }}</div>
      <div class="scroll-Y">scrollY:{{ scrolly }}</div>
    </div>
    <div class="mouse">
      <div class="mouse-x">mouseX:{{ mouseX }}</div>
      <div class="mouse-Y">mouseY:{{ mouseY }}</div>
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";
import useCounter from "./hooks/useCounter";
import useTitle from "./hooks/useTitle";
import useScrollPosition from "./hooks/useScrollPosition";
import useMousePosition from "./hooks/useMousePosition"
export default {
  setup() {
    // useCounter
    const { counter, doubleCounter, increment, decrement } = useCounter();

    // useTitle
    const titleRef = useTitle("tjx");
    setTimeout(() => {
      titleRef.value = "yinnan";
    }, 3000);

    // useScrollPosition
    const { scrollx, scrolly } = useScrollPosition();

    // useMousePosition
    const {mouseX, mouseY} = useMousePosition()

    return {
      counter,
      doubleCounter,
      increment,
      decrement,
      scrollx,
      scrolly,
      mouseX,
      mouseY
      // ...useCounter() // 不推荐这样写
    };
  },
};
</script>

<style scoped>
.content {
  width: 3000px;
  height: 5000px;
}
.scroll {
  position: fixed;
  right: 30px;
  bottom: 30px;
}
.mouse {
  position: fixed;
  right: 30px;
  bottom: 80px;
}
</style>
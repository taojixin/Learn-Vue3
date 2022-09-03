<template>
  <div class="home">
    <h2>home view</h2>
    <h2>name: {{ name }}</h2>
    <h2>age : {{ age }}</h2>
    <h2>level : {{ level }}</h2>
    <button @click="changeState">修改state</button>
    <button @click="resetState">重置state</button>
  </div>
</template>

<script setup>
import useUser from "../stores/user";
import { storeToRefs } from "pinia";

const userStore = useUser();

const { name, age, level } = storeToRefs(userStore);

function changeState() {
  // 1.一个一个修改状态
  // userStore.name = "yn";
  // userStore.age = 19;
  // userStore.level = 200;

  // 2.一次性修改多个状态: patch(),可以传入函数（该函数返回一个state）也可以传入对象
  userStore.$patch({
    name: "love",
    age: 20,
  });

  // 3.替换一个新的state
  userStore.$state = {
    name: "i love",
    level: 300,
    // 注：age属性还是存在
  };
}
function resetState() {
  // 重置state
  userStore.$reset();
}
</script>

<style lang="scss" scoped>
</style>
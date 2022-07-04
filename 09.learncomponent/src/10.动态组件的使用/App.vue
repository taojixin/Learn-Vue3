<template>
  <div>
    <button
      v-for="item in tabs"
      :key="item"
      @click="itemClick(item)"
      :class="{ active: currentTab === item }"
    >
      {{ item }}
    </button>

    <!-- 1.通过v-if实现 -->
    <!-- <template v-if="currentTab === 'home'">
      <home></home>
    </template>
    <template v-else-if="currentTab === 'category'">
      <category></category>
    </template>
    <template v-else>
      <about></about>
    </template> -->

    <!-- 2.动态组件 -->
    <!-- <component :is="currentTab"></component> -->
    <!-- 动态组件传值：通过props进行传递，然后home,about等组件通过props接受 -->
    <!-- <component
      :is="currentTab"
      name="tjx"
      :age="18"
      @pageClick="pageaClick"
    ></component> -->

    <!-- keep-alive -->
    <keep-alive include="about,home"
      ><component
        :is="currentTab"
        name="tjx"
        :age="18"
        @pageClick="pageaClick"
      ></component
    ></keep-alive>
  </div>
</template>

<script>
import Home from "./pages/Home.vue";
import Category from "./pages/Category.vue";
import About from "./pages/About.vue";
export default {
  data() {
    return {
      tabs: ["home", "about", "category"],
      currentTab: "home",
    };
  },
  methods: {
    itemClick(item) {
      this.currentTab = item;
    },
    pageaClick() {
      console.log("page内部发生点击");
    },
  },
  components: {
    Home,
    Category,
    About,
  },
};
</script>

<style scoped>
.active {
  color: red;
}
</style>
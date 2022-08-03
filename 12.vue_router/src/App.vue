<template>
  <!-- 修改a标签的class，默认为router-link-active -->
  <!-- <router-link to="/home" active-class="tjx">home</router-link> -->

  <!-- 插槽 -->
  <!-- 1.默认 -->
  <!-- <router-link to="/home">
    <button>首页</button>
  </router-link> -->
  <!-- 2.组件 -->
  <!-- <router-link to="/home">
    <nav-bar title="首页"></nav-bar>
    <span>hhh</span>
  </router-link> -->

  <!-- 3.作用域插槽 -->
  <!-- props中有很多东西，如 1.href 以及要跳转的路由对象 2.route 还有 3.navigate导航函数 和 4.isActive 是否当前处于活跃状态-->
  <!-- 注：custom：添加了这个属性router-link中的元素将不再被a标签包裹，同时不能跳转到to的path，需要手动跳转，这时可以使用 navigate 导航函数，跳转到to的path -->
  <router-link to="/home" v-slot="props" custom>
    <button @click="props.navigate">{{ props.href }}</button>
    <!-- <p>{{props.route}}</p> -->
  </router-link>

  <router-link to="/about">about</router-link>
  <router-link to="/category">分类</router-link>
  <router-link to="/user/tjx/id/111">user</router-link>
  <button @click="jumpToAbout">关于</button>

  <router-view v-slot="props">
    <transition name="tjx">
      <keep-alive>
        <component :is="props.Component"></component>
      </keep-alive>
    </transition>
  </router-view>
</template>

<script>
import { useRouter } from "vue-router";
// import NavBar from './components/NavBar.vue'
export default {
  name: "App",
  components: {
    // NavBar
  },
  // setup中通过useRouter获取$router，注意不是useRoute
  setup() {
    const router = useRouter();
    const jumpToAbout = () => {
      // 1.传递字符串
      // router.push("/about");
      // 2.传递对象
      router.push({
        path: "/about",
        query: {
          name: "yn",
          age: 18,
        },
      });
      // router.replace("/about")\
    };

    return {
      jumpToAbout,
    };
  },
  // methods: {
  //   jumpToAbout() {
  //     // router对象
  //     this.$router.push('/about')
  //   }
  // }
};
</script>

<style>
/* router-link实际是a标签，同时会给a标签添加class便于用户更改样式 class="router-link-active router-link-exact-active" */
.router-link-active {
  color: red;
}

.tjx-enter-from,
.tjx-leave-to {
  opacity: 0;
}
.tjx-enter-active,
.tjx-leave-active {
  transition: opacity 1s ease;
}
</style>

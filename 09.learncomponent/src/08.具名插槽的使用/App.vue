<template>
  <div>
    <nav-bar :name="name">
      <!-- # 为 v-slot的缩写 -->
      <template #left>
        <button>左边按钮</button>
      </template>

      <template #center>
        <h2>标题</h2>
      </template>

      <template v-slot:right>
        <i>右边</i>
      </template>

      <template v-slot:[name]>
        <i>tjx</i>
      </template>
    </nav-bar>

  </div>
</template>

<script>
import NavBar from "./NavBar.vue"
  export default {
    components: {
      NavBar
    },
    data() {
      return {
        name: 'tjx'
      }
    }
  }
</script>

<style scoped>

</style>
<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// 手动引入
// import { ElButton } from 'element-plus'
// import 'element-plus/theme-chalk/el-button.css'
// import 'element-plus/theme-chalk/base.css'

export default defineComponent({
  components: {},
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.app {
  height: 100%;
}
</style>

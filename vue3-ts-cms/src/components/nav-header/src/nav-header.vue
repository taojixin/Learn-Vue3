<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <DArrowRight v-if="isFold" />
      <DArrowLeft v-else />
    </el-icon>
    <div class="content">
      <hy-breadcrumb :breadcrumbs="breadcrumbs"></hy-breadcrumb>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { DArrowLeft, DArrowRight } from '@element-plus/icons-vue'
import UserInfo from './user-info.vue'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import HyBreadcrumb from '@/base-ui/breadcrumb'

export default defineComponent({
  components: {
    DArrowLeft,
    DArrowRight,
    UserInfo,
    HyBreadcrumb
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    // 面包屑数据
    const store = useStore()
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })
    console.log(breadcrumbs)

    return {
      isFold,
      breadcrumbs,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>

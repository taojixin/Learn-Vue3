<template>
  <div class="header-crumbs">
    <el-breadcrumb separator="/">
      <template v-for="(item, index) in breadcrumbs" :key="index">
        <el-breadcrumb-item :to="item.path">{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts" name="header-crumbs">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import useLoginStore from '@/store/login'

const breadcrumbs = computed(() => {
  const route = useRoute()
  const loginStore = useLoginStore()
  const breadcrumbs = mapPathToBreadcrumbs(loginStore.userMenus, route.path)
  return breadcrumbs
})

function mapPathToBreadcrumbs(menus: any[], path: string) {
  const breadcrumbs: any[] = []
  // 1.两层遍历
  for (const menu of menus) {
    for (const submenu of menu.children) {
      if (path === submenu.url) {
        breadcrumbs.push({ name: menu.name, path: menu.url })
        breadcrumbs.push({ name: submenu.name, path: submenu.url })
      }
    }
  }
  return breadcrumbs
}
</script>

<style scoped lang="less"></style>

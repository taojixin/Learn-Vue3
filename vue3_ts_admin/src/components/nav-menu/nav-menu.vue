<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="@/assets/img/logo.svg" alt="logo" />
      <span v-show="!isFold" class="title">弘源管理系统</span>
    </div>
    <el-menu
      :default-active="defaultValue"
      :collapse="isFold"
      text-color="#b7bdc3"
      active-text-color="#fff"
      background-color="#001529"
    >
      <template v-for="item in userMenus" :key="item.id">
        <el-sub-menu :index="item.id + ''">
          <template #title>
            <el-icon>
              <component :is="item.icon.split('el-icon-')[1]" />
            </el-icon>
            <span>{{ item.name }}</span>
          </template>
          <template v-for="subitem in item.children" :key="subitem.id">
            <el-menu-item :index="subitem.id + ''" @click="handleItemClick(subitem)">
              {{ subitem.name }}
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import useLoginStore from '@/store/login'
import { ref } from 'vue'
defineProps({
  isFold: {
    type: Boolean,
    default: false
  }
})

// 1.获取菜单数据
const loginStore = useLoginStore()
const userMenus = loginStore.userMenus
console.log(userMenus)

// 2.默认值的问题
const route = useRoute()
const currentMenu = mapPathToMenu(userMenus, route.path)
const defaultValue = ref<string>(currentMenu?.id + '')

function mapPathToMenu(menus: any[], path: string) {
  for (const menu of menus) {
    for (const submenu of menu.children) {
      if (path === submenu.url) return submenu
    }
  }
}

// 3.监听item点击
const router = useRouter()
function handleItemClick(item: any) {
  router.push(item.url)
}
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;
}

.logo {
  display: flex;
  height: 28px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  .img {
    height: 100%;
    margin: 0 10px;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    color: white;
    white-space: nowrap;
  }
}

.el-menu {
  border-right: none;
  user-select: none;
}

.el-sub-menu {
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135;
  }

  .el-menu-item:hover {
    color: #fff;
  }

  .el-menu-item.is-active {
    background-color: #0a60bd;
  }
}
</style>

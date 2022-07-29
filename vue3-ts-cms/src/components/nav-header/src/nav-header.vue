<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <DArrowRight v-if="isFold" />
      <DArrowLeft v-else />
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { DArrowLeft, DArrowRight } from '@element-plus/icons-vue'

export default defineComponent({
  components: {
    DArrowLeft,
    DArrowRight
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return {
      isFold,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>

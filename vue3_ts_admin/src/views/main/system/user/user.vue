<template>
  <div class="user">
    <PageSearch />
    <PageContent />
    <PageModal />
  </div>
</template>

<script setup lang="ts" name="user">
import PageSearch from './c-cpns/page-search.vue'
import PageContent from './c-cpns/page-content.vue'
import PageModal from '@/views/main/system/user/c-cpns/page-modal.vue'
</script>

<style scoped>
.user {
}
</style>

<template>
  <div>
    <template v-for="item,index in names" :key="item">
      <slot :item="item" :index="index"></slot>
    </template>
  </div>
</template>

<script>
  export default {
    props: {
      names: {
        type: Array,
        defautl: () => []
      }
    }
  }
</script>

<style scoped>

</style>
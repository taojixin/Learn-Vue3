<template>
  <div class="nav-bar">

    <div class="left">
      <slot name="left"></slot>
    </div>

    <div class="center">
      <slot name="center"></slot>
    </div>

    <div class="right">
      <slot name="right"></slot>
    </div>
    
    <!-- 动态具名插槽 -->
    <div class="addition">
      <slot :name="name"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      name: String
    }
  }
</script>

<style scoped>
.nav-bar {
  display: flex;
}
.left, .right, .center {
  height: 44px;
}
.left, .right {
  width: 80px;
  background-color: red;
}
.center {
  flex: 1;
  background-color: blue;
}
</style>
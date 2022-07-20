<template>
  <div>
    <h2>home</h2>
    <ul>
      <li>home内容1</li>
      <li>home内容2</li>
      <li>home内容3</li>
    </ul>
    
    <router-link to="/home/message">消息</router-link>
    <router-link to="/home/shops">商品</router-link>
    <router-link to="/home/moment">moment</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>
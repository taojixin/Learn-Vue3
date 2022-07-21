<template>
  <div>
    <h2>Home: {{sCounter}}</h2>
    <hr>
    <h2>Home: {{counter}}</h2>
    <h2>Home: {{name}}</h2>
    <h2>Home: {{age}}</h2>
    <h2>Home: {{height}}</h2>
  </div>
</template>

<script>
// 引入useState
import {useState} from '../hooks/useState'
  export default {
    setup() {
      const storeState = useState(['counter', 'name', 'age', 'height'])
      
      return {
        ...storeState
      }
    }
  }
</script>

<style scoped>

</style>
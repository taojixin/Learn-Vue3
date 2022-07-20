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
import {useStore,mapState} from "vuex"
import {computed} from 'vue'
  export default {
    setup() {
      const store = useStore()
      const sCounter = computed(() => store.state.counter)

      const storeStateFns = mapState(['counter', 'name', 'age', 'height'])
      const storeState = {}
      Object.keys(storeStateFns).forEach(fnKey => {
        const fn = storeStateFns[fnKey].bind({$store: store});
        storeState[fnKey] = computed(fn)
      })



      return {
        sCounter,
        ...storeState
      }
    }
  }
</script>

<style scoped>

</style>
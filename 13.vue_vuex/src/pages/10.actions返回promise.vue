<template>
  <div>
    <h2>当前计数：{{ $store.state.counter }}</h2>
    <button @click="incrementAction">+1</button>
    <button @click="decrementAction">-1</button>
    <hr>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import {onMounted} from 'vue'
export default {
  setup() {
    const store = useStore()

    onMounted(() => {
      const promise = store.dispatch("getHomeMultidata")
      promise.then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })

    })
    return {
    }
  }
};
</script>

<style scoped>
</style>
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

      // 因为mapState返回的是一个对象，如果在return中直接通过 ...storeStateFns 返回的是一个个的函数对象，不能直接使用，所以需要进行进一步的封装
      const storeStateFns = mapState(['counter', 'name', 'age', 'height'])
      const storeState = {}
      // Object.keys用于获取 storeStateFns 所有的key，再通过forEach遍历给 storeStateFns每一个key对应的返回的函数绑定store，
      Object.keys(storeStateFns).forEach(fnKey => {
        const fn = storeStateFns[fnKey].bind({$store: store});
        // 再通过computed获取每一个key对应的ref值保存到新的对象 storeState 中，此时 storeState 中都是computed转化后的值
        storeState[fnKey] = computed(fn)
      })



      return {
        sCounter,
        // 再通过拓展运算符的方式
        ...storeState
      }
    }
  }
</script>

<style scoped>

</style>
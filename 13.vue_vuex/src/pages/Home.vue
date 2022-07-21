<template>
  <div>
    <h2>{{ homeCounter }}</h2>
    <h2>{{ doubleHomeCounter }}</h2>
    <button @click="increment">home+1</button>
    <button @click="incrementAction">home+1</button>
    <hr>
  </div>
</template>

<script>
// import {mapState, mapGetters, mapMutations, mapActions, createNamespacedHelpers} from 'vuex'
import {createNamespacedHelpers} from 'vuex'
// const hyMapState = createNamespacedHelpers('home').mapState
const {mapState, mapGetters, mapMutations, mapActions} = createNamespacedHelpers('home')
export default {
  computed: {
    // 1.写法一：
    // ...mapState({
    //   homeCounter: state => state.home.homeCounter
    // }),
    // ...mapGetters({
    //   doubleHomeCounter: 'home/doubleHomeCounter'
    // }),

    // 写法二：
    // ...mapState('home', ["homeCounter"]),
    // ...mapGetters('home', ['doubleHomeCounter'])

    // 写法三：
    ...mapState(["homeCounter"]),
    ...mapGetters(['doubleHomeCounter'])
  },
  methods: {
    // 写法一：
    // ...mapMutations({
    //   increment: 'home/increment'
    // }),
    // ...mapActions({
    //   incrementAction: 'home/incrementAction'
    // })

    // 写法二：
    // ...mapMutations('home', ['increment']),
    // ...mapActions('home', ['incrementAction'])

    // 写法三：
    ...mapMutations(['increment']),
    ...mapActions(['incrementAction'])
  },
  setup() {
    

    return {
      // 02:08:53
    }
  }
};
</script>

<style scoped>
</style>
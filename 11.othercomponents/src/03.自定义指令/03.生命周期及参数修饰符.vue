<template>
  <div>
    <button v-if="counter < 2" v-tjx.aaa="'tjx'" @click="increment">当前计数{{counter}}</button>
  </div>
</template>

<script>
import {ref} from "vue"
  export default {
    // 局部指令
    directives: {
      tjx: {
        created(el, bindings, vnode, preVnode) {
          console.log("tjx created");
          console.log(el, bindings, vnode, preVnode);
          // 获取指令传递的参数
          console.log(bindings.value);
          // 指令的修饰符
          console.log(bindings.modifiers);
        },
        beforeMount() {
          console.log("tjx beforeMount");
        },
        mounted() {
          console.log("tjx mounted");
        },
        beforeUpdate() {
          console.log("tjx beforeUpdate");
        },
        updated() {
          console.log("tjx updated");
        },
        beforeUnmount() {
          console.log("tjx beforeUnmount");
        },
        unmounted() {
          console.log("tjx unmount");
        }
      }
    },
    setup() {
      const counter = ref(0)
      const increment = () => counter.value++;


      return {
        counter,
        increment

      }
    }
  }
</script>

<style scoped>

</style>
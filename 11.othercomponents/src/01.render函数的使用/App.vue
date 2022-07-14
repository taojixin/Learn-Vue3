<template>
  <hello-world>
    <template #default></template>
  </hello-world>
</template>

<script>
import { h} from "vue";
import HelloWorld from "./HelloWorld.vue"
export default {
  setup() {
    // setup代替render函数
    return () => {
      return h(HelloWorld, null, {
        default: props => h("span", null, `app传入hello中的${props.name}`)
      })
    };
  },
};
</script>

<style scoped>
</style>
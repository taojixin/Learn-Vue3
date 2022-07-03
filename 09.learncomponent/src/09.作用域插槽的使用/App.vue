<template>
  <div>
    <child-cpn>
      <button>哈哈哈</button>
    </child-cpn>

    <show-names :names="names">
      <template v-slot="slotProps">
        <button>{{slotProps.item}}={{slotProps.index}}</button>
      </template>
    </show-names>
    <!-- 缩写，只有是默认插槽且只有一个插槽（独占）的时候才能这么写 官方称为：独占默认插槽的缩写 -->
    <!-- 注：如果有其他的具名插槽，那么默认插槽也必须用template来编写 -->
    <show-names :names="names" v-slot="slotProps">
        <button>{{slotProps.item}}={{slotProps.index}}</button>
    </show-names>
  </div>
</template>

<script>
import ChildCpn from "./ChildCpn.vue"
import ShowNames from "./ShowNames.vue"
  export default {
    components: {
      ChildCpn,
      ShowNames
    },
    data() {
      return {
        names: ["tjx", "sd", "dsfsdf", "fsd"]
      }
    }
  }
</script>

<style scoped>

</style>
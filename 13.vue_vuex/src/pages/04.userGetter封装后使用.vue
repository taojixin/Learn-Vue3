<template>
  <div>
    <h2>总价值：{{ $store.getters.totalPrice }}</h2>
    <h2>总价值：{{ $store.getters.totalPriceCountGreaterN(2) }}</h2>
    <hr />
    <h2>{{ $store.getters.nameInfo }}</h2>
    <h2>{{ ageInfo }}</h2>
    <h2>{{ heightInfo }}</h2>
    <hr />
    <h2>{{ sNameInfo }}</h2>
    <h2>{{ sAgeInfo }}</h2>
    <h2>{{ sHeightInfo }}</h2>
    <hr>
    <h2>{{ sNameInfoa }}</h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {useGetters} from '../hooks/useGetters'
export default {
  computed: {
    // 数组类型
    ...mapGetters(["nameInfo", "ageInfo", "heightInfo"]),
    // 对象类型
    ...mapGetters({
      sNameInfo: "nameInfo",
      sAgeInfo: "ageInfo",
      sHeight: 'heightInfo'
    })
  },
  setup() {
    // const store = useStore();
    // const sNameInfoa = computed(() => store.getters.nameInfo)
    const storeGetters = useGetters(["nameInfo", "ageInfo", "heightInfo"])

    return {
      ...storeGetters
    }
  }
};
</script>

<style scoped>
</style>
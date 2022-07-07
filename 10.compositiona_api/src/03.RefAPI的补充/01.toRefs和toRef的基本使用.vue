<template>
  <div>
    <!-- <h2>{{ info.name }}-{{ info.age }}</h2> -->
    <h2>{{ name }}-{{ age }}</h2>
    <button @click="changeAge">修改age</button>
  </div>
</template>

<script>
// import { reactive, toRefs, toRef } from "vue";
import { reactive, toRef } from "vue";
export default {
  setup() {
    const info = reactive({ name: "tjx", age: 19 });
    // 解构后的数据不是响应式的，这里的解构只是取值
    // const {name,age} = info

    // 1.toRefs：将reactive对象中的所有属性转化为ref，建立链接
    // 为了解构后的值也是响应式的，可以使用toRefs
    // let {name, age} = toRefs(info)

    // 2.toRef: 只转化一个属性
    let {name} = info
    let age = toRef(info, "age")

    const changeAge = () => {
      // info.age++;
      // 使用toRefs后：
      age.value++
    };

    return {
      info,
      changeAge,
      name,
      age
    };
  },
};
</script>

<style scoped>
</style>
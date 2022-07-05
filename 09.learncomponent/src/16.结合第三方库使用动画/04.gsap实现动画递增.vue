<template>
  <div class="app">
    <input type="number" step="100" v-model="counter">
    <h2>{{showCounter}}</h2>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data() {
    return {
      counter: 0,
      showNumber: 0
    };
  },
  computed: {
    showCounter() {
      return this.showNumber.toFixed(0)
    }
  },
  watch: {
    counter(newValue) {
      gsap.to(this, {
        duration: 1,
        showNumber: newValue
      })
    }
  }
};
</script>

<style scoped>
.title {
  display: inline-block;
}
</style>
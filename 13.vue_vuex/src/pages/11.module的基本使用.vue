<template>
  <div>
    <h2>{{ $store.state.rootCounter }}</h2>
    <h2>{{ $store.state.home.homeCounter }}</h2>
    <h2>{{ $store.state.user.userCounter }}</h2>
    <hr>
  </div>
</template>

<script>
export default {
  setup() {
    return {
    }
  }
};
</script>

<style scoped>
</style>
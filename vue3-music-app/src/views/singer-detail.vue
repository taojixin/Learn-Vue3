<template>
  <div class="singer-detail">
    <MusicList :songs="songs" :title="title" :pic="pic"></MusicList>
  </div>
</template>

<script setup>
import { getSingerDetail } from "@/service/singer";
import { processSongs } from "@/service/song";
import MusicList from "@/components/music-list/music-list.vue";

import { defineProps, onMounted, ref } from "vue";
import { computed } from "@vue/reactivity";
const props = defineProps({
  singer: Object,
});

let songs = ref([]);
const pic = computed(() => {
  return props.singer && props.singer.pic;
});
const title = computed(() => {
  return props.singer && props.singer.name;
});

onMounted(async () => {
  const result = await getSingerDetail(props.singer);
  console.log(result);
  //   const songs = await processSongs(result.songs);
  //   console.log(songs);
  songs.value = result.songs;
});
</script>

<style lang="scss" scoped>
.singer-detail {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: $color-background;
}
</style>

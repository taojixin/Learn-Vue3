<template>
  <div class="singer-detail"></div>
</template>

<script setup>
import { getSingerDetail } from "@/service/singer";
import { processSongs } from "@/service/song";

import { defineProps, onMounted } from "vue";
const props = defineProps({
  singer: Object,
});

onMounted(async () => {
  const result = await getSingerDetail(props.singer);
  const songs = await processSongs(result.songs);
  console.log(songs);
});
</script>

<style lang="scss" scoped></style>

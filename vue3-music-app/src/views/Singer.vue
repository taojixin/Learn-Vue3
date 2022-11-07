<template>
  <div class="singer" v-loading="!singers.length">
    <index-list :data="singers" @select="selectSingers"></index-list>
    <router-view :singer="selectSinger"></router-view>
  </div>
</template>

<script setup>
import { getSingerList } from "@/service/singer";
import { onMounted, ref } from "vue";
import IndexList from "@/components/index-list/index-list.vue";
import { useRouter } from "vue-router";

const singers = ref([]);
const selectSinger = ref(null);
const router = useRouter();
onMounted(async () => {
  const result = await getSingerList();
  singers.value = result.singers;
});

const selectSingers = function (singer) {
  selectSinger.value = singer;
  router.push({
    path: `/singer/${singer.mid}`,
  });
};
</script>

<style lang="scss" scoped>
.singer {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
}
</style>

import { get } from "./base";

export function getSingerList() {
  return get("/getSingerList");
}

export function getSingerDetail(singer) {
  return get("/getSingerDetail", {
    mid: singer.mid,
  });
}

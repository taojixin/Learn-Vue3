import { computed, ref } from "vue";

export default function useShortcut(props, groupRef) {
  const ANCHOR_HEIGHT = 18;
  const scrollRef = ref(null);

  const shortcutList = computed(() => {
    return props.data.map((group) => {
      return group.title;
    });
  });

  const touch = {};

  //   点击某一个跳转
  function onShortcutTouchStart(e) {
    const anchorIndex = parseInt(e.target.dataset.index);
    touch.y1 = e.touches[0].pageY;
    touch.anchorIndex = anchorIndex;

    scrollTo(anchorIndex);
  }

  //   移动跳转
  function onShortcutTouchMove(e) {
    touch.y2 = e.touches[0].pageY;
    const delta = ((touch.y2 - touch.y1) / ANCHOR_HEIGHT) | 0;
    const anchorIndex = touch.anchorIndex + delta;

    scrollTo(anchorIndex);
  }

  function scrollTo(index) {
    if (isNaN(index)) {
      return;
    }
    index = Math.max(1, Math.min(shortcutList.value.length - 1, index));
    const targetEl = groupRef.value.children[index];
    const scroll = scrollRef.value.scroll;
    scroll.scrollToElement(targetEl, 0);
  }

  return {
    shortcutList,
    onShortcutTouchStart,
    scrollRef,
    onShortcutTouchMove,
  };
}

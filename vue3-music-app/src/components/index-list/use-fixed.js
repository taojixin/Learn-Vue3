import { nextTick, ref, watch, computed } from "vue";

export default function useFixed(props) {
  const TITLE_HEIGHT = 30;
  const groupRef = ref(null);
  // 每一个分类的高度
  const listHeights = ref([]);
  const scrollY = ref(0);
  const currentIndex = ref(0);
  const distance = ref(0);

  const fixedTitle = computed(() => {
    if (scrollY.value < 0) {
      return "";
    }
    const currentGroup = props.data[currentIndex.value];
    return currentGroup ? currentGroup.title : "";
  });

  const fixedStyle = computed(() => {
    const distanceVal = distance.value;
    const diff =
      distanceVal > 0 && distanceVal < TITLE_HEIGHT
        ? distanceVal - TITLE_HEIGHT
        : 0;
    return {
      transform: `translate3d(0,${diff}px,0)`,
    };
  });

  watch(
    () => props.data,
    async () => {
      await nextTick();
      calculate();
    }
  );
  // 监听滚动，判读当前处于哪一个区间
  watch(scrollY, (newY) => {
    const listHeightsVal = listHeights.value;
    for (let i = 0; i < listHeightsVal.length - 1; i++) {
      const heightTop = listHeightsVal[i];
      const heightBottom = listHeightsVal[i + 1];
      if (newY >= heightTop && newY <= heightBottom) {
        currentIndex.value = i;
        distance.value = heightBottom - newY;
      }
    }
  });

  // 计算每一个分类的高度并保存到listHeightsVal中
  function calculate() {
    // 获取ul的子元素
    const list = groupRef.value.children;
    const listHeightsVal = listHeights.value;
    let height = 0;

    listHeightsVal.length = 0;
    listHeightsVal.push(height);

    for (let i = 0; i < list.length; i++) {
      // 每一个li的高度
      height += list[i].clientHeight;
      listHeightsVal.push(height);
    }
  }

  function onScroll(pos) {
    scrollY.value = -pos.y;
  }

  return {
    groupRef,
    onScroll,
    fixedTitle,
    fixedStyle,
    currentIndex,
  };
}

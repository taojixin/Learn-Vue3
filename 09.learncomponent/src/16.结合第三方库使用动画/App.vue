<template>
  <div>
    <button @click="addNum">添加数字</button>
    <button @click="removeNum">删除数字</button>

    <transition-group tag="p" name="tjx">
      <span v-for="item in numbers" :key="item" class="item">{{item}}</span>
    </transition-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        numCounter: 10
      }
    },
    methods: {
      addNum() {
        this.numbers.splice(this.randomIndex(), 0, this.numCounter++)
      },
      removeNum() {
         this.numbers.splice(this.randomIndex(), 1)
      },
      randomIndex() {
        return Math.floor(Math.random() * this.numbers.length)
      }
    }
  }
</script>

<style scoped>
.item {
  margin-right: 10px;
}

.tjx-enter-from,
.tjx-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.tjx-enter-active,
.tjx-leave-avtive {
  transition: all 1s ease;
}

.tjx-leave-avtive {
  position: absolute;
}

.tjx-move {
  transition: transform 1s ease;
}

</style>
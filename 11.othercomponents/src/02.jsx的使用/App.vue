
<script>
import HelloWorld from "vue"
  export default {
    data() {
      return {
        counter: 100
      }
    },
    render() {
      const increment = () => this.counter++
      const decrement = () => this.counter--
      return (
        <div>
          <h2>当前计数:{this.counter}</h2>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
          <HelloWorld></HelloWorld>
        </div>
      )
    }
  }
</script>

<style scoped>

</style>
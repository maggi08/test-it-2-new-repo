<template>
  <div class="counter">
    <p>Count: {{counter}}</p>
    <button @click="counter--">Decrement</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      counter: 10
    }
  }
}
</script>


<style scoped>
.counter{
  background: black;
  color: white;
}
</style>
<template>
  <div class="counter">
    <button @click="decrement">-</button>

    <p>Count: {{ counter }}</p> 

    <button @click="increment">+</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      counter: 0
    }
  },
  methods:{
    decrement(){
      if(this.counter === 0) return
      this.counter--
    },
    increment(){
      if(this.counter >= 10) return
      this.counter++
    }
  }
}
</script>

<style scoped>

.counter{
  display: flex;
  align-items: center;
  font-size: 24px;
}

.counter button{
  width: 32px;
  height: 32px;
}

</style>
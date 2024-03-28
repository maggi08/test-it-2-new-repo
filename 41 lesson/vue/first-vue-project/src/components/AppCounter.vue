<template>
  <div class="">
    <h2>Count: {{ counter}}</h2>
    <button @click="counter++">Click me</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      counter: 0
    }
  }
  
}
</script>

<style >

</style>
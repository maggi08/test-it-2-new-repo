<template>
  <h1>Hello Vue</h1>
  
  <AppCounter />

  <AppCounter />

</template>

<script>
import AppCounter from './components/AppCounter.vue'

export default {
  components:{
    AppCounter
  },
  data(){
    return {
    }
  }
}
</script>


<style>

</style>

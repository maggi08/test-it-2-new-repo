<template>
  <h1>Hello Vue</h1>

  <div 
    v-for="(color, index) in colors" 
    :key="index" 
    class=""
    style="margin: 4px; height: 30px"
    :style="'background:' + color"
  >
    index-{{index}}: {{ (index+1) % 2 === 0 ? color.toUpperCase() : color }}
  </div>

  

  <!-- <div class="" v-html="msg"></div> -->

  <!-- <button v-bind:id="okButton">ok</button> -->
  <!-- <button :id="cancelButton" @click="cancelButton='wrong'">cancel</button> -->
<!-- 
  <h3>{{  msg1.toUpperCase() }}</h3>

  <p>{{ 5 > 6 ? 'bigger': 'smaller' }}</p>

  <form>
    <label>
      Согласны ли вы с публичной офертой   
      <input type="checkbox" v-model="isChecked">
    </label>

    <button :disabled="!isChecked">Продолжить</button>
  </form> -->

  <!-- <AppCounter /> -->
</template>

<script>
// import AppCounter from './components/AppCounter.vue'

export default {
  components:{
    // AppCounter
  },
  data(){
    return {
      okButton: 'ok_btn',
      cancelButton: 'cancel_btn',
      msg: `<h2>How are you?</h2> <button>fine</button>`,
      msg1: 'vue is cool',
      isChecked: false,
      colors: ['red', 'green', 'yellow', 'black', 'white', 'blue', 'yellow']
    }
  },
}
</script>


<style scoped>

</style>

<template>
  <h1>Hello Vue</h1>

  <!-- <button @click="(showCounter = !showCounter), (coords.counter.countx = 1000)">
    {{ showCounter ? 'Hide' : 'Show' }} Counter
  </button>

  <AppCounter v-show="showCounter" /> -->
  <PublishBooks />
</template>

<script>
// import AppCounter from './components/AppCounter.vue'
import PublishBooks from './components/PublishBooks.vue'
export default {
  components: {
    // AppCounter,
    PublishBooks
  },
  data() {
    return {
      showCounter: false,
      link: '',
      coords: {
        x: 0,
        y: 0,
        counter: {
          countx: 0
        }
      }
    }
  },
  methods: {
    onMousemove(event) {
      this.coords.x = event.x
      this.coords.y = event.y
    }
  }
}
</script>

<style scoped>
.div {
  margin-top: 20px;
  width: 100%;
  height: 400px;
  background: #ccc;
}
.div_modified {
  margin-top: 20px;
  width: 100%;
  height: 400px;
  background: #888;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

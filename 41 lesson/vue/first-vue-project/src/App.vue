<template>
  <h1>Hello Vue</h1>

  <select v-model="selected">
    <option v-for="(option, index) in options" :key="index" :value="option.value">
      {{ option.text }}
    </option>
  </select>

  <div>Selected: {{ selected }}</div>
  <!-- <button @click="(showCounter = !showCounter), (coords.counter.countx = 1000)">
    {{ showCounter ? 'Hide' : 'Show' }} Counter
  </button>-->

  <!-- <AppCounter v-for="i in 10" :key="i" /> -->
  <!-- <PublishBooks /> -->
  <!-- <div class="" v-for="(num, index) in numbers" :key="index">
    {{ num }}
  </div>

  <div class="" v-for="(num, index) in sortedNumbers" :key="index">
    {{ num }}
  </div> -->
  <!-- <div class="" @click.once="console.log(1)">
    1

    <div class="" @click.self="console.log(2)">
      2
      <div class="" @click="console.log(3)">3</div>
    </div>
  </div> -->

  <!-- <h2></h2> -->

  <!-- <label for="firstName">Users First name is {{ firstName }}</label>
  <br />
  <input
    id="firstName"
    :value="firstName"
    placeholder=" enter your name"
    type="text"
    @input="onInput"
  />
  <br />
  <br />

  <label for="lastNamesa">Users Last name is {{ lastName }}</label>
  <br />
  <input id="lastName" v-model="lastName" placeholder=" enter your lastname" type="text" /> -->
</template>

<script>
// import AppCounter from './components/AppCounter.vue'
// import PublishBooks from './components/PublishBooks.vue'
export default {
  components: {
    // AppCounter,
    // PublishBooks
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      showCounter: false,
      link: '',
      numbers: [4, 2, 5, 1, 3],
      coords: {
        x: 0,
        y: 0,
        counter: {
          countx: 0
        }
      },

      selected: 'A',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ]
    }
  },
  computed: {
    sortedNumbers() {
      return [...this.numbers].sort()
    }
  },
  methods: {
    onMousemove(event) {
      this.coords.x = event.x
      this.coords.y = event.y
    },
    onInput(event) {
      console.log('onInput', event.target.value)
      this.firstName = event.target.value
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

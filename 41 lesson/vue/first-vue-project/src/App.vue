<template>
  <MyUsers />

  <!-- <input type="text" placeholder="some text" @input="onInput" />
  <div>
    My text
    <p id="myText"></p>
  </div>

  <input v-model="myText2" type="text" placeholder="some text" />
  <div>
    My text 2:
    <p>{{ myText2 }}</p>
  </div> -->

  <!-- selected = {{ selected }}
  <br /> -->

  <!-- <label>
    First

    <input v-model="selected" type="radio" value="first" />
  </label>
  <br />

  <label>
    Second

    <input v-model="selected" type="radio" value="second" />
  </label> -->
</template>

<script>
// import AppCounter from './components/AppCounter.vue'
// import PublishBooks from './components/PublishBooks.vue'
import MyUsers from './components/MyUsers.vue'

export default {
  components: {
    // AppCounter,
    // PublishBooks,
    MyUsers
  },
  data() {
    return {
      myText2: 'Hello',
      selected: 'Nothing'
    }
  },
  computed: {},
  methods: {
    onInput(event) {
      console.log(event.target.value)
      let { value } = event.target

      document.getElementById('myText').innerText = value
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

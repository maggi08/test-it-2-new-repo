<template>
  <div class="">
    <p>Even or Odd</p>

    <p>
      {{ message }}
    </p>
  </div>
  <div class="counter">
    <button @click="decrement">-</button>

    <p id="counter">Count: {{ counter }}</p>

    <button @click="increment">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  computed: {
    message() {
      return `counter is ${this.counter % 2 === 0 ? 'Even' : 'Odd'} `
    }
  },
  created() {
    console.log('created')
  },
  mounted() {
    console.log('mounted')
  },
  updated() {
    console.log('updated', document.getElementById('counter'))
  },
  beforeUpdate() {
    console.log('beforeUpdate', document.getElementById('counter'))
  },
  unmounted() {
    console.log('unmounted')
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  methods: {
    decrement() {
      if (this.counter === 0) return
      this.counter--
    },
    increment() {
      if (this.counter >= 10) return
      this.counter++
    }
  }
}
</script>

<style scoped>
.counter {
  display: flex;
  align-items: center;
  font-size: 24px;
}

.counter button {
  width: 32px;
  height: 32px;
}
</style>

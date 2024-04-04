<template>
  <form action="" @submit.prevent="onSubmit">
    <input v-model="bookInput" type="text" placeholder="Name of book" />

    <button>submit book</button>
  </form>

  <h1>Books list</h1>

  <p>
    Has published books: <span>{{ hasPublishedBooks }}</span>
  </p>

  hover = {{ hover }}

  <ol>
    <li
      v-for="(book, index) in reversedBooks"
      :key="index"
      class="book"
      @mouseover="hover = index"
      @mouseleave="hover = -1"
    >
      {{ book }}
      <div v-if="hover === index" class="delete_btn" @click="deleteBook(book)">x</div>
    </li>
  </ol>
</template>

<script>
export default {
  data() {
    return {
      bookInput: '',
      hover: -1,
      books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery']
      // author: {
      //   name: 'John Doe',
      // }
    }
  },
  computed: {
    // a computed getter
    hasPublishedBooks() {
      // `this` points to the component instance
      return this.books.length > 0 ? 'Yes' : 'No'
    },
    reversedBooks() {
      return [...this.books].reverse()
    }
  },
  methods: {
    reset() {
      this.bookInput = ''
    },
    onSubmit() {
      console.log('onSubmit', this.bookInput)
      this.bookInput = this.bookInput.trim()
      if (!this.bookInput) return

      this.books.push(this.bookInput)
      this.reset()
    },
    deleteBook(book) {
      console.log('deleteBook', book)
      let index = this.books.findIndex((b) => b === book)
      this.books.splice(index, 1)
    }
  }
}
</script>

<style>
.book {
  height: 30px;
  font-size: 20px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.book:hover {
  cursor: pointer;
  background: #ccc;
}
.delete_btn {
  height: 30px;
  width: 30px;
  font-size: 20px;
  cursor: pointer;
  background: red;
  display: flex;
  justify-content: center;
}
</style>

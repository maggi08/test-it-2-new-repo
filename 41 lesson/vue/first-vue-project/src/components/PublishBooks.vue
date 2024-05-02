<template>
  <form action="" @submit.prevent="onSubmit">
    <input v-model="bookInput" type="text" placeholder="Name of book" />

    <button>submit book</button>
  </form>

  <h1>Books list {{ bookName ? '- ' + bookName : '' }}</h1>

  <p>
    Has published books: <span>{{ hasPublishedBooks }}</span>
  </p>

  <UiList :list="reversedBooks">
    <template #item="{ title, num }">
      <p style="font-size: 32px; color: red">{{ num }} - {{ title }}</p>
    </template>
  </UiList>

  <UiList :list="['white', 'blue', 'red', 'black', 'gray']" style="margin-top: 64px">
    <template #item="{ title, num }">
      <p
        style="font-size: 24px; background: gray"
        :style="`color: ${title === 'gray' ? 'white' : title};`"
      >
        {{ num }} - {{ title }}
      </p>
    </template>
  </UiList>

  <!-- <ol>
    <li
      v-for="(book, index) in reversedBooks"
      :key="index"
      class="book"
      :class="`${divcolor} ${bookName === book ? 'book__active' : ''} ${reversedBooks.length - 1 === index ? 'book__last' : ''}`"
      @click="bookName = book"
      @mouseover="hover = index"
      @mouseleave="hover = -1"
    >
      {{ book }}
      <div v-if="hover === index" class="delete_btn" @click="deleteBook(book)">x</div>
    </li>
  </ol> -->
</template>

<script>
import UiList from '@/components/ui/UiList.vue'

export default {
  components: {
    UiList
  },
  data() {
    return {
      bookInput: '',
      bookName: '',
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
    },
    divcolor() {
      return 'adsfsad;fk'
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

<style></style>

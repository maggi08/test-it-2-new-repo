<template>
  <DefaultLayout>
    <template v-slot:header>
      <h1>LOGO</h1>
      <nav>
        <ul style="display: flex; margin-left: 100px">
          <li><a href="">1</a></li>
          <li><a href="">2</a></li>
          <li><a href="">3</a></li>
          <li><a href="">4</a></li>
        </ul>
      </nav>
    </template>

    <PublishBooks />

    <MyUsers />

    <template #footer="slotProps">
      <h1>This is my Footer</h1>
      <h2>{{ slotProps.message }}</h2>
    </template>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from './layouts/DefaultLayout.vue'
import MyUsers from './components/MyUsers.vue'
import PublishBooks from './components/PublishBooks.vue'
// import TwoInputs from './components/TwoInputs.vue'
// import UiInput from './components/ui/UiInput.vue'
// import UiModal from './components/ui/UiModal.vue'

export default {
  components: {
    DefaultLayout,
    PublishBooks,
    MyUsers
    // UiInput,
    // UiModal,
    // TwoInputs
  },
  data() {
    return {
      myText2: 'Hello',
      selected: 'Nothing',
      loginForm: {
        email: 'test@email.com',
        password: 'testtestest'
      },
      registrationForm: {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        password2: ''
      },
      modalShown: false,

      pervyi: '1',
      vtoroi: '2'
    }
  },
  mounted() {},
  computed: {},
  methods: {
    onInput(event) {
      console.log(event.target.value)
      let { value } = event.target

      document.getElementById('myText').innerText = value
    },
    onChangeInput(value) {
      console.log('onChangeInput', value)
      this.loginForm.email = value
    },
    reset() {
      this.loginForm = {
        email: '',
        password: ''
      }
    },
    onChangeModalView(value) {
      this.modalShown = value
      console.log('onChangeModalView', value)
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

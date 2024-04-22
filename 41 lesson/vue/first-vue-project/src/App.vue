<template>
  <!-- pervyi-{{ pervyi }} vtoroi-{{ vtoroi }}
  <two-inputs v-model:first="pervyi" v-model:second="vtoroi" />

  <UiModal v-model="modalShown" /> -->
  <!-- <UiModal :modelValue="modalShown" @update:modelValue="(v) => (modalShown = v)" /> -->
  <!-- <UiModal :modelValue="modalShown" @update:modelValue="(event) => (modalShown = event)" /> -->
  <!-- <UiModal :modelValue="modalShown" @update:modelValue="modalShown = $event" /> -->
  <!-- <UiModal :modelValue="modalShown" @update:modelValue="onChangeModalView" /> -->
  <!-- 
  <button @click="modalShown = true">Show Modal</button>
  <form action="">
    Form of Login

    <UiInput v-model="loginForm.email" label="Email" />
    <UiInput v-model="loginForm.password" label="Passowrd" />
    <button @click="reset" type="button">reset</button>
  </form>

  <form action="" style="margin-top: 50px">
    Form of Registration
    <UiInput v-model="registrationForm.email" label="Email" />
    <UiInput v-model="registrationForm.password" label="Password" />
    <UiInput v-model="registrationForm.password2" label="Repeat password" />
  </form> -->

  <MyUsers />
</template>

<script>
import MyUsers from './components/MyUsers.vue'
// import TwoInputs from './components/TwoInputs.vue'
// import UiInput from './components/ui/UiInput.vue'
// import UiModal from './components/ui/UiModal.vue'

export default {
  components: {
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

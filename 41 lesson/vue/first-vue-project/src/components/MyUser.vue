<template>
  <div
    class="user"
    :style="[isCEO ? 'background: yellow;' : '', isCTO ? 'background: skyblue;' : '']"
    @click="openModal"
  >
    <img class="user-avatar" :src="img" alt="" />
    <p class="user-name">{{ num }} {{ upperName }}</p>

    <button @click="$emit('onSelectCEO')">Select new CEO</button>
    <button @click="$emit('onSelectCTO')">Select new CTO</button>
  </div>
  <UiModal v-model="showModal">
    <p>User name is - {{ upperName }}</p>
    <p>User avatar</p>
    <img class="user-avatar" :src="img" alt="" />
    <UiInput />
  </UiModal>
</template>

<script>
import UiModal from '@/components/ui/UiModal.vue'
import UiInput from '@/components/ui/UiInput.vue'

export default {
  // props: ['name', 'img', 'num']
  // props: {
  //   name: String,
  //   img: String,
  //   num: Number || String
  // }
  components: {
    UiModal,
    UiInput
  },
  data() {
    return {
      showModal: false
    }
  },
  props: {
    num: {
      type: Number || String,
      default: 1
    },
    name: {
      type: String,
      required: true
    },
    img: {
      type: String,
      default:
        'https://bs-uploads.toptal.io/blackfish-uploads/components/seo/5928299/og_image/optimized/op-Ten-Front-End-Design-Rules-For-Developers_Luke-Social-33a3a7c9b759fdaa22973906070f8065.png'
    },
    isCEO: {
      type: Boolean,
      default: false
    },
    isCTO: {
      type: Boolean,
      default: false
    },
    propF: {
      validator(value) {
        // The value must match one of these strings
        return ['success', 'warning', 'danger'].includes(value)
      }
    }
  },
  computed: {
    upperName() {
      return this.name.toUpperCase()
    }
  },
  methods: {
    onClick() {
      this.$emit('onTriggerUser', this.name)
    },
    openModal() {
      this.showModal = true
      console.log('openModal')
    }
  }
}
</script>

<style scoped>
.user-avatar {
  width: 100%;
}
</style>

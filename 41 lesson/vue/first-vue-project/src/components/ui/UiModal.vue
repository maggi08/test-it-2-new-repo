<template>
  <div v-if="modelValue" class="ui-modal" @click="closeModal">
    <div class="ui-modal-content" @click="onClick">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick() {
      console.log('content clicked')
    },
    closeModal() {
      console.log('ui-modal clicked')
      this.$emit('update:modelValue', false)
    }
  }
}
</script>

<style scoped>
.ui-modal {
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.45);

  display: flex;
  justify-content: center;
  align-items: center;
}

.ui-modal-content {
  padding: 24px;
  border-radius: 24px;
  background: white;
  min-width: 548px;
}
</style>

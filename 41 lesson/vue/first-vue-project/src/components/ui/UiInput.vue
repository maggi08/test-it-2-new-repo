<template>
  <label class="ui-input">
    <p>{{ label }}</p>

    <input :value="modelValue" type="text" @input="onInput" />
  </label>
</template>

<script>
export default {
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: 'Label'
    }
  },
  methods: {
    onInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.ui-input p {
  margin-bottom: 0;
}
.ui-input input {
  width: 100%;
  height: 32px;
  border-radius: 12px;
  border-color: rgba(186, 118, 36, 0.265);
}
</style>

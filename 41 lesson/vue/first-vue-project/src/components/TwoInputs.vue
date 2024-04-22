<template>
  <UiInput :modelValue="first" label="First" @update:modelValue="$emit('update:first', $event)" />
  <UiInput
    :modelValue="second"
    label="Second"
    @update:modelValue="$emit('update:second', $event)"
  />
</template>

<script>
import UiInput from './ui/UiInput.vue'

export default {
  components: { UiInput },
  data() {
    return {}
  },
  emits: ['update:first', 'update:second'],
  props: {
    first: {
      type: String,
      default: ''
    },
    second: {
      type: String,
      default: ''
    }
  }
}
</script>

<style></style>

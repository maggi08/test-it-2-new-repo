<template>
  <button class="ui-button">
    <slot></slot>
  </button>
</template>

<script>
export default {}
</script>

<style scoped>
.ui-button {
  width: 100%;
  height: 32px;

  border-radius: 12px;
  border: 1px solid rgb(255, 157, 0, 1);
  background: rgb(255, 157, 0, 0.5);
  outline: none;

  color: white;
  font-size: 12px;
}
.ui-button:hover {
  background: rgb(255, 157, 0, 1);
}
.ui-button:active {
  background: rgb(255, 157, 0, 0.8);
}
</style>

<template>
  <header class="header">
    <slot name="header"></slot>
  </header>
  <main class="main">
    <slot></slot>
  </main>
  <footer class="footer">
    <slot name="footer" :message="message"></slot>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      message: 'My message'
    }
  }
}
</script>

<style scoped>
.header {
  height: 48px;
  width: 100%;
  border-bottom: 1px solid gray;
  position: fixed;
  z-index: 10;
  padding: 12px 48px;

  top: 0;

  background: white;

  display: flex;
}
.main {
  margin-top: 48px;
  width: 100%;
  min-height: 100vh;
}
.footer {
  width: 100%;
  height: 200px;
  padding: 50px 48px;

  background: gray;
}
</style>

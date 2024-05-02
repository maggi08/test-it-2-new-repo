<template>
  <ul class="ui-list">
    <li class="ul-list-item" v-for="(item, index) in list" :key="index">
      <slot name="item" v-bind="{ title: item, num: index + 1 }"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.ui-list {
  width: 200%;
  margin-left: 40px;
}

.ui-list-item {
  margin: 12px 4px;

  height: 30px;
  font-size: 20px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: medium;
}

.book {
}
.book:hover {
  cursor: pointer;
  background: #ccc;
}
.book__active {
  background: orange;
  color: white;
}
.book__first {
  border-top: 2px solid black;
}
.book__last {
  border-bottom: 2px solid black;
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

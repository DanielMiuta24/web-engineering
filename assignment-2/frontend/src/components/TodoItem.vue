<template>
  <div :class="{ done: todo.completed }" class="todo-item">
    <input type="checkbox" :checked="todo.completed" @change="$emit('toggle-done', todo._id)" />
    <span>{{ todo.title }}</span>
    <button @click="$emit('delete-item', todo._id)">🗑</button>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: Object
  }
}
</script>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 6px 0;
}
.done span {
  text-decoration: line-through;
  color: gray;
}
</style>

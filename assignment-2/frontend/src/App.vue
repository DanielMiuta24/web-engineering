<template>
  <div class="app">
    <h1>Todo App</h1>

    <div class="input-wrapper">
      <input
        v-model="newTodo"
        placeholder="Add a new task..."
      />
      <button @click="addTodo" :disabled="!newTodo.trim()">Add Task</button>
    </div>

    <TodoItem
      v-for="todo in todos"
      :key="todo._id"
      :todo="todo"
      @toggle-done="toggleDone"
      @delete-item="deleteTodo"
    />
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: { TodoItem },
  data() {
    return {
      newTodo: '',
      todos: []
    }
  },
  mounted() {
    this.fetchTodos()
  },
  methods: {
    async fetchTodos() {
      try {
        const res = await axios.get('/api/tasks')
        this.todos = res.data
      } catch (err) {
        console.error('Error fetching todos:', err)
      }
    },
    async addTodo() {
      if (!this.newTodo.trim()) return
      try {
        const res = await axios.post('/api/tasks', { title: this.newTodo })
        this.todos.unshift(res.data)
        this.newTodo = ''
      } catch (err) {
        console.error('Error adding todo:', err)
      }
    },
    async toggleDone(id) {
      const todo = this.todos.find(t => t._id === id)
      if (!todo) return
      try {
        const updated = await axios.put(`/api/tasks/${id}`, {
          completed: !todo.completed
        })
        todo.completed = updated.data.completed
      } catch (err) {
        console.error('Error toggling todo:', err)
      }
    },
    async deleteTodo(id) {
      try {
        await axios.delete(`/api/tasks/${id}`)
        this.todos = this.todos.filter(t => t._id !== id)
      } catch (err) {
        console.error('Error deleting todo:', err)
      }
    }
  }
}
</script>

<style>
body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #f7f9fc;
  padding: 2rem;
  margin: 0;
}

.app {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
}

.input-wrapper {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.input-wrapper input {
  flex: 1;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 2px solid #007bff;
  border-radius: 8px;
  outline: none;
}

.input-wrapper button {
  background: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.input-wrapper button:hover {
  background: #0056b3;
}

.input-wrapper button:disabled {
  background: #cccccc;
  cursor: not-allowed;
}
</style>

<script setup lang="ts">

import { useStore } from '@vanyamate/sec-vue';
import { getTodosEffect, todosList, todosLoading } from '@/todo/model/todo.model.ts';
import TodoItemWidget from '@/todo/ui/widget/TodoItemWidget/TodoItemWidget.vue';
import TodoCreateForm from '@/todo/ui/widget/TodoCreateForm/TodoCreateForm.vue';
import { onMounted } from 'vue';


const todos   = useStore(todosList);
const loading = useStore(todosLoading);

onMounted(() => {
  getTodosEffect();
});

</script>

<template>
  <TodoCreateForm/>
  <hr/>
  <h1 v-if="loading">Загрузка</h1>
  <div class="list" v-else>
    <TodoItemWidget v-if="todos.length" v-for="todo in todos" :todo="todo" :key="todo.id"/>
    <div v-else>Пусто</div>
  </div>
</template>

<style scoped>
.list {
  padding        : 5px;
  display        : flex;
  flex-direction : column;
  gap            : 5px;
}
</style>
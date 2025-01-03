<script setup lang="ts">
import { type Todo } from '@/todo/types/todo.types.ts';


const { todo } = defineProps<
    {
      todo: Todo
    }
>();
</script>

<template>
  <div class="container">
    <header>
      <span>{{ todo.id }}</span>
      <h2>{{ todo.title }}</h2>
    </header>
    <p>{{ todo.description }}</p>
    <p>Статус: {{ todo.status }}</p>
    <slot name="footer"></slot>
  </div>
</template>

<style scoped>
.container {
  padding        : 5px;
  display        : flex;
  flex-direction : column;
  gap            : 3px;
  background     : #EEE;
  border-radius  : 5px;
}
</style>
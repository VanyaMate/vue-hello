<script setup lang="ts">
import { updateTodoEffect } from '@/todo/model/todo.model.ts';
import { type ButtonHTMLAttributes, ref } from 'vue';
import type { Todo } from '@/todo/types/todo.types.ts';


const {
        todo,
      }       =
          defineProps<{ todo: Todo }>();
const pending = ref(false);

const updateTodo = function () {
  pending.value = true;
  updateTodoEffect(todo.id, { title: todo.title, status: todo.status, description: todo.status })
      .finally(() => pending.value = false);
};

</script>

<template>
  <button @click="updateTodo">update</button>
</template>
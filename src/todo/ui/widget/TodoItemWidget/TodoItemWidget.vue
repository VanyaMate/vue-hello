<script lang="ts" setup>
import { ref } from 'vue';
import type { Todo } from '@/todo/types/todo.types.ts';
import TodoItem from '@/todo/ui/entity/TodoItem/TodoItem.vue';
import DeleteTodoButton from '@/todo/ui/feature/DeleteTodoButton/DeleteTodoButton.vue';


const { todo } = defineProps<{
  todo: Todo;
}>();

const updatedData = ref({ ...todo });

</script>

<template>
  <TodoItem :todo="updatedData">
    <template v-slot:footer>
      <DeleteTodoButton :todo-id="todo.id"/>
    </template>
  </TodoItem>
</template>
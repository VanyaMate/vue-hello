<script setup lang="ts">
import { deleteTotoEffect } from '@/todo/model/todo.model.ts';
import { type ButtonHTMLAttributes, ref } from 'vue';


const {
        todoId,
      }       =
          defineProps<{ todoId: string }>();
const pending = ref(false);

const deleteTodo = function () {
  pending.value = true;
  deleteTotoEffect(todoId)
      .finally(() => pending.value = false);
};

</script>

<template>
  <button @click="deleteTodo" :disabled="pending">delete</button>
</template>
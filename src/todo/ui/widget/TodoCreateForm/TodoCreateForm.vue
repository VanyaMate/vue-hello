<script setup lang="ts">

import { ref } from 'vue';
import { useStore } from '@vanyamate/sec-vue';
import { createTodoEffect, createTodoIsPending } from '@/todo/model/todo.model.ts';


const createPending = useStore(createTodoIsPending);
const form          = ref();

const createTodo = function (event: FormDataEvent) {
  const formData = new FormData(event.target);

  if (formData.get('title')) {
    createTodoEffect({ title: formData.get('title'), description: formData.get('description') })
        .then(() => {
          (event.target as HTMLFormElement).elements.namedItem('title').value       = '';
          (event.target as HTMLFormElement).elements.namedItem('description').value = '';
        });
  }
};

</script>

<template>
  <form @submit.prevent="createTodo" :class="{disabled: createPending}" ref="form">
    <input
        type="text"
        placeholder="Заголовок"
        name="title"
    />
    <input
        type="text"
        placeholder="Описание"
        name="description"
    />
    <button type="submit">Создать</button>
  </form>
</template>

<style>
form.disabled {
  opacity        : .5;
  pointer-events : none;
  user-select    : none;
}
</style>
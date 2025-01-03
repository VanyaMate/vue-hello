<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from '@vanyamate/sec-vue';
import { updateLoginFromServerEffect, userStore, userStoreLoading } from '@/model/user.model.ts';


defineProps<{ msg: string }>();

const user    = useStore(userStore);
const loading = useStore(userStoreLoading);
const input   = ref('');
const notes   = ref<Array<string>>([]);


const updateInput = function (event: InputEvent) {
  input.value = (event.target as HTMLInputElement).value;
};


const addNote = function () {
  notes.value.push(input.value);
  input.value = '';
};

const updateMessageFromNotification = function () {
  updateLoginFromServerEffect(user.value.login, 'New Login');
};

</script>

<template>
  <h1>{{ msg }} / {{ input }}</h1>
  <form @submit.prevent="addNote">
    <Input placeholder="Test" @input="updateInput" v-bind:value="input"/>
    <button type="submit">Add</button>
  </form>
  <hr/>
  <ul>
    <li v-for="note in notes">{{ note }}</li>
  </ul>
  <hr/>
  <p>{{ user.login }}</p>
  <p>{{ user.age }}</p>
  <button @click="updateMessageFromNotification" v-bind:disabled="loading">{{ loading ? 'loading' : 'update' }}</button>
</template>

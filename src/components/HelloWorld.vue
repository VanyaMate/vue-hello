<script setup lang="ts">
import { ref } from 'vue';
import { effect, store } from '@vanyamate/sec';
import { useStore } from '@vanyamate/sec-vue';


const updateLoginFromServer = async function (loginFor: string, loginTo: string) {
  return [ loginFor, loginTo ];
};

const updateLoginFromServerEffect = effect(updateLoginFromServer);

const userStore = store<{ login: string, age: number }>({
  login: 'VanyaMate',
  age  : 27,
})
    .on(updateLoginFromServerEffect, 'onSuccess', (user, { result }) => {
      user.login = result![1];
      user.age += 1;
      return user;
    });

defineProps<{ msg: string }>();

const user  = useStore(userStore);
const input = ref('');
const notes = ref<Array<string>>([]);


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
  <form @submit="addNote" action="#">
    <Input placeholder="Test" @input="updateInput" v-bind:value="input"/>
    <button type="submit">Add</button>
  </form>
  <hr/>
  <ul>
    <li v-for="note in notes">{{ note }}</li>
  </ul>
  <hr/>
  <p>{{ user.login }}</p>
  <p @click="updateMessageFromNotification">{{ user.age }}</p>
</template>

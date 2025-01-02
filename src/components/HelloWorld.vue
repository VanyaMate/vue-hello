<script setup lang="ts">
import { ref, customRef } from 'vue';


type EffectFunction<Args extends any[], Result> = (...args: Args) => Promise<Result>;
type EffectEvent =
    'onBefore'
    | 'onSuccess'
    | 'onError'
    | 'onFinally';

type Effect<Args extends any[], Result> = {
  (...args: Args): Promise<Result>;
  onSuccess: (callback: (result: Result, ...args: Args) => void) => void;
  onError: (callback: (error: unknown, ...args: Args) => void) => void;
  onFinally: (callback: (...args: Args) => void) => void;
  onBefore: (callback: (...args: Args) => void) => void;
};

type Listener<State> = (state: State) => void;
type Payload<Result, Args> = {
  result?: Result;
  error?: unknown;
  args: Args;
};
type Handler<State, Args, Result> = (state: State, payload: Payload<Result, Args>) => State;

function effect<Args extends any[], Result> (fn: EffectFunction<Args, Result>): Effect<Args, Result> {
  let beforeListeners: ((...args: Args) => void)[]                  = [];
  let successListeners: ((result: Result, ...args: Args) => void)[] = [];
  let errorListeners: ((error: unknown, ...args: Args) => void)[]   = [];
  let finallyListeners: ((...args: Args) => void)[]                 = [];

  const wrappedEffect: Effect<Args, Result> = async (...args: Args) => {
    beforeListeners.forEach(listener => listener(...args));
    try {
      const result = await fn(...args);
      successListeners.forEach(listener => listener(result, ...args));
      return result;
    } catch (error) {
      errorListeners.forEach(listener => listener(error, ...args));
      throw error;
    } finally {
      finallyListeners.forEach(listener => listener(...args));
    }
  };

  wrappedEffect.onBefore = (callback: (...args: Args) => void) => {
    beforeListeners.push(callback);
  };

  wrappedEffect.onSuccess = (callback: (result: Result, ...args: Args) => void) => {
    successListeners.push(callback);
  };

  wrappedEffect.onError = (callback: (error: unknown, ...args: Args) => void) => {
    errorListeners.push(callback);
  };

  wrappedEffect.onFinally = (callback: (...args: Args) => void) => {
    finallyListeners.push(callback);
  };

  return wrappedEffect;
}

type Store<State> = {
  get: () => State;
  set: (newState: State) => void;
  on: <Args extends any[], Result>(
      effect: Effect<Args, Result>,
      event: EffectEvent,
      handler: Handler<State, Args, Result>,
  ) => Store<State>;
  subscribe: (listener: Listener<State>) => () => void;
};

function store<State> (initialState: State): Store<State> {
  let state                        = initialState;
  let listeners: Listener<State>[] = [];

  const get = () => state;
  const set = (newState: State) => {
    state = newState;
    listeners.forEach(listener => listener(state));
  };

  const on = <Args extends any[], Result> (
      effect: Effect<Args, Result>,
      event: EffectEvent,
      handler: Handler<State, Args, Result>,
  ): Store<State> => {
    const callback = (payload: Payload<Result, Args>) => storeApi.set(handler(state, payload));

    if (event === 'onBefore') {
      effect.onBefore((...args) => callback({ args }));
    } else if (event === 'onSuccess') {
      effect.onSuccess((result, ...args) => callback({
        result,
        args,
      }));
    } else if (event === 'onError') {
      effect.onError((error, ...args) => callback({ error, args }));
    } else if (event === 'onFinally') {
      effect.onFinally((...args) => callback({ args }));
    }

    return storeApi;
  };

  const subscribe = (listener: Listener<State>) => {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    };
  };

  const storeApi = {
    get,
    set,
    on,
    subscribe,
  };

  return storeApi;
}


const updateMessageFromNotificatipon = async function (message: string) {
  return message;
};

const updateMessageFromNotificatiponEffect = effect(updateMessageFromNotificatipon);

const messageStore = store<string>('message')
    .on(updateMessageFromNotificatiponEffect, 'onSuccess', (_, { result }) => result!);

defineProps<{ msg: string }>();

const message = customRef<string>((track, trigger) => {
  const get = messageStore.get;
  const set = messageStore.set;

  messageStore.get = function () {
    track();
    return get();
  };

  messageStore.set = function (value: string) {
    set(value);
    trigger();
  };

  return messageStore;
});
const input   = ref('');
const notes   = ref<Array<string>>([]);

const user = ref({
  login: 'VanyaMate',
  age  : 27,
});

const updateInput = function (event: InputEvent) {
  input.value = (event.target as HTMLInputElement).value;
};

const updateRef = function (event: InputEvent) {
  message.value = (event.target as HTMLInputElement).value;
};

const addNote = function () {
  notes.value.push(input.value);
  input.value = '';
};

const updateMessageFromNotification = function () {
  updateMessageFromNotificatiponEffect('New Message');
};

</script>

<template>
  <h1>{{ msg }} / {{ input }} / {{ message }}</h1>
  <form @submit="addNote" action="#">
    <Input placeholder="Test" @input="updateInput" v-bind:value="input"/>
    <Input placeholder="Ref" @input="updateRef" v-bind:value="message"/>
    <button type="submit">Add</button>
  </form>
  <button type="button" @click="updateMessageFromNotification">Update Message From Notification</button>
  <hr/>
  <ul>
    <li v-for="note in notes">{{ note }}</li>
  </ul>
  <hr/>
  <p>{{ user.login }}</p>
  <p @click="user.age++">{{ user.age }}</p>
</template>

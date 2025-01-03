import { effect, store } from '@vanyamate/sec-vue';
import { updateLoginFromServer } from '@/action/updateLoginFromServer.ts';


export const updateLoginFromServerEffect = effect(updateLoginFromServer);

export const userStoreLoading = store<boolean>(false)
    .on(updateLoginFromServerEffect, 'onBefore', (store) => store.value = true)
    .on(updateLoginFromServerEffect, 'onFinally', (store) => store.value = false);

export const userStore = store<{ login: string, age: number }>({
    login: 'VanyaMate',
    age  : 27,
})
    .on(updateLoginFromServerEffect, 'onSuccess', (user, { result }) => {
        user.value.login = result![1];
        user.value.age += 1;
    });
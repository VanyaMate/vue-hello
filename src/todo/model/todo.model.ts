import { effect, store } from '@vanyamate/sec-vue';
import type { Todo } from '@/todo/types/todo.types.ts';
import { getTodosAction } from '@/todo/action/getTodos.action.ts';
import { createTodoAction } from '@/todo/action/createTodo.action.ts';
import { updateTodoAction } from '@/todo/action/updateTodo.action.ts';
import { deleteTodoAction } from '@/todo/action/deleteTodo.action.ts';


export const getTodosEffect   = effect(getTodosAction);
export const createTodoEffect = effect(createTodoAction);
export const updateTodoEffect = effect(updateTodoAction);
export const deleteTotoEffect = effect(deleteTodoAction);

export const createTodoIsPending = store<boolean>(false)
    .on(createTodoEffect, 'onBefore', (state) => state.value = true)
    .on(createTodoEffect, 'onFinally', (state) => state.value = false);

export const todosLoading = store<boolean>(false)
    .on(getTodosEffect, 'onBefore', (state) => state.value = true)
    .on(getTodosEffect, 'onFinally', (state) => state.value = false);

export const todosList = store<Array<Todo>>([])
    .on(getTodosEffect, 'onSuccess', (state, { result }) => state.value = result!)
    .on(createTodoEffect, 'onSuccess', (state, { result }) => state.value.push(result!))
    .on(updateTodoEffect, 'onSuccess', (state, { result }) => {
        for (let i = 0; i < state.value.length; i++) {
            if (state.value[i].id === result?.id) {
                Object.assign(state.value[i], result);
                return;
            }
        }
    })
    .on(deleteTotoEffect, 'onSuccess', (state, { args: [ id ] }) => {
        for (let i = 0; i < state.value.length; i++) {
            if (state.value[i].id === id) {
                state.value.splice(i, 1);
                return;
            }
        }
    });
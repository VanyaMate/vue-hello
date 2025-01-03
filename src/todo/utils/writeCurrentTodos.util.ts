import type { Todo } from '@/todo/types/todo.types.ts';
import { TODO_LOCAL_STORAGE_NAME } from '@/todo/const/todo-localstore.const.ts';


export const writeCurrentTodosUtil = function (todos: Array<Todo>) {
    localStorage.setItem(TODO_LOCAL_STORAGE_NAME, JSON.stringify(todos));
};
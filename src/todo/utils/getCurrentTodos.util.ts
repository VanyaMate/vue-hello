import { TODO_LOCAL_STORAGE_NAME } from '@/todo/const/todo-localstore.const.ts';
import type { Todo } from '@/todo/types/todo.types.ts';


export const getCurrentTodosUtil = function (): Array<Todo> {
    const currentTodos = localStorage.getItem(TODO_LOCAL_STORAGE_NAME);
    return currentTodos ? JSON.parse(currentTodos) : [];
};
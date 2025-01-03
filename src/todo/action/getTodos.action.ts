import type { Todo } from '@/todo/types/todo.types.ts';
import { getCurrentTodosUtil } from '@/todo/utils/getCurrentTodos.util.ts';


export const getTodosAction = async function (): Promise<Array<Todo>> {
    return new Promise<Array<Todo>>((resolve) => {
        setTimeout(() => {
            resolve(getCurrentTodosUtil());
        }, 500);
    });
};
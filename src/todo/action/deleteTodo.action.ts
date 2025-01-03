import { getCurrentTodosUtil } from '@/todo/utils/getCurrentTodos.util.ts';
import { writeCurrentTodosUtil } from '@/todo/utils/writeCurrentTodos.util.ts';


export const deleteTodoAction = async function (id: string): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
        setTimeout(() => {
            writeCurrentTodosUtil(getCurrentTodosUtil().filter((todo) => todo.id !== id));
            resolve(true);
        }, 500);
    });
};
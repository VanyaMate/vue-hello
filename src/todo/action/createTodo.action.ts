import {
    type Todo,
    type TodoCreateData,
    TodoStatus,
} from '@/todo/types/todo.types.ts';
import { getCurrentTodosUtil } from '@/todo/utils/getCurrentTodos.util.ts';
import { writeCurrentTodosUtil } from '@/todo/utils/writeCurrentTodos.util.ts';


export const createTodoAction = async function (createData: TodoCreateData): Promise<Todo> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const todos      = getCurrentTodosUtil();
            const todo: Todo = {
                id         : crypto.randomUUID(),
                title      : createData.title,
                description: createData.description ?? '',
                status     : TodoStatus.PROCESS,
            };
            todos.push(todo);
            writeCurrentTodosUtil(todos);
            resolve(todo);
        }, 500);
    });
};
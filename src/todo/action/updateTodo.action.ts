import type { Todo, TodoUpdateData } from '@/todo/types/todo.types.ts';
import { getCurrentTodosUtil } from '@/todo/utils/getCurrentTodos.util.ts';
import { writeCurrentTodosUtil } from '@/todo/utils/writeCurrentTodos.util.ts';


export const updateTodoAction = async function (id: string, updateData: TodoUpdateData): Promise<Todo> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const todos = getCurrentTodosUtil();
            for (let i = 0; i < todos.length; i++) {
                if (todos[i].id === id) {
                    todos[i] = {
                        ...todos[i],
                        ...updateData,
                    };
                    writeCurrentTodosUtil(todos);
                    return resolve(todos[i]);
                }
            }
        }, 500);
    });
};
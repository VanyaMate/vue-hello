import type { CreateTaskData, Task } from '@/freelance/types/task.types.ts';
import { getApiEndpoint } from '@/app/utils/getApiEndpoint.util.ts';


export const createTaskAction = async function (data: CreateTaskData): Promise<Task> {
    return fetch(getApiEndpoint(`/freelance.json`), {
        method : 'POST',
        body   : JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            return {
                id: data.name,
                ...data,
            };
        });
};
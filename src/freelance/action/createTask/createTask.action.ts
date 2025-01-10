import type {
    CreateTaskData,
    TaskCreateResponseApi,
} from '@/freelance/types/task.types.ts';
import { getApiEndpoint } from '@/app/utils/getApiEndpoint.util.ts';


export const createTaskAction = async function (data: CreateTaskData): Promise<TaskCreateResponseApi> {
    return fetch(getApiEndpoint(`/freelance.json`), {
        method : 'POST',
        body   : JSON.stringify({ ...data, createdAt: Date.now() }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json());
};
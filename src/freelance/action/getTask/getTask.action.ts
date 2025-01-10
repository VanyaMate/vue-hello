import type { Task } from '@/freelance/types/task.types.ts';
import { getApiEndpoint } from '@/app/utils/getApiEndpoint.util.ts';


export const getTaskAction = async function (id: string): Promise<Task> {
    return fetch(getApiEndpoint(`/freelance/${ id }.json`))
        .then((response: Response) => response.json());
};
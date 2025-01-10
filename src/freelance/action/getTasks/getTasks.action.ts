import type { Task } from '@/freelance/types/task.types.ts';
import { getApiEndpoint } from '@/app/utils/getApiEndpoint.util.ts';


export const getTasksAction = async function (): Promise<Array<Task>> {
    return fetch(getApiEndpoint(`/freelance.json`))
        .then((response: Response) => response.json())
        .then(
            (record) =>
                record
                ? Object.entries<Omit<Task, 'id'>>(record).map(([ key, value ]) => ({ id: key, ...value }))
                : [],
        );
};
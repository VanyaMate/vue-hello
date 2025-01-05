import type { UpdateTaskData } from '@/freelance/types/task.types.ts';
import { getApiEndpoint } from '@/app/utils/getApiEndpoint.util.ts';


export const updateTaskAction = async function (id: string, updateData: UpdateTaskData): Promise<UpdateTaskData> {
    return fetch(getApiEndpoint(`/freelance/${ id }.json`), {
        method : 'PATCH',
        body   : JSON.stringify(updateData),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then(() => updateData);
};
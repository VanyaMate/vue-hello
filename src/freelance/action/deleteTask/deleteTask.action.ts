import { getApiEndpoint } from '@/app/utils/getApiEndpoint.util.ts';


export const deleteTaskAction = async function (id: string): Promise<boolean> {
    return fetch(getApiEndpoint(`/freelance/${ id }.json`), { method: 'DELETE' }).then((response) => response.json()).then(() => true);
};
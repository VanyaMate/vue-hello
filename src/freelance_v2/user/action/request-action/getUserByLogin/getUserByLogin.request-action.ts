import type { User } from '@/freelance_v2/user/types/user.types.ts';
import { getApiEndpoint } from '@/app/utils/getApiEndpoint.util.ts';


export const getUserByLoginRequestAction = async function (login: string): Promise<User | null> {
    return fetch(`${ getApiEndpoint('user') }/${ login }.json`).then((response) => response.json());
};
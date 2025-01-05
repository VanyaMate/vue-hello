import { API_URL } from '@/app/const/api.const.ts';


export const getApiEndpoint = function (endpoint: string): string {
    return `${ API_URL }/${ endpoint }`;
};
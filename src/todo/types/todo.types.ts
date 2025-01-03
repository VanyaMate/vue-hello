export enum TodoStatus {
    PROCESS  = 'process',
    COMPLETE = 'complete'
}

export type Todo = {
    id: string;
    title: string;
    description: string;
    status: TodoStatus;
}

export type TodoCreateData = {
    title: string;
    description?: string;
}

export type TodoUpdateData = {
    title?: string;
    description?: string;
    status?: TodoStatus;
}
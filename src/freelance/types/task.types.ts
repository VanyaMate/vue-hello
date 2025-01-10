export enum TaskStatus {
    CANCELED  = 'canceled',
    IDLE      = 'idle',
    WIP       = 'wip',
    COMPLETED = 'completed'
}

export type TaskCreateResponseApi = {
    name: string;
}

export type Task = {
    id: string;
    title: string;
    description: string;
    completionDate: number;
    createdAt: number;
    status: TaskStatus
}

export type CreateTaskData = Omit<Task, 'id' | 'createdAt'>;
export type UpdateTaskData = Partial<Omit<Task, 'id' | 'createdAt'>>;
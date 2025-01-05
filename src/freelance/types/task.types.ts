export enum TaskStatus {
    CANCELED  = 'canceled',
    IDLE      = 'idle',
    WIP       = 'wip',
    COMPLETED = 'completed'
}

export type Task = {
    id: string;
    title: string;
    description: string;
    status: TaskStatus
}

export type CreateTaskData = Omit<Task, 'id'>;
export type UpdateTaskData = Partial<Omit<Task, 'id'>>;
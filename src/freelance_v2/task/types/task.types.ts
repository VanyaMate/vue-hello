export enum TaskStatus {
    IDLE,
    WIP,
    COMPLETED,
    CANCELED
}

export type Task = {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    createdAt: number;
    completionDate: number | null;
    employeeId: string | null;
}

export type CreateTaskData = Omit<Task, 'id' | 'createdAt' | 'employeeId' | 'status'>;
export type UpdateTaskData = Partial<Omit<Task, 'id' | 'createdAt'>>;
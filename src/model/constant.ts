export interface ITask {
    id: number;
    title: string;
    completed: boolean;
}

export const LocalStorageKeys = {
    TASKS: 'tasks',
}
import { TaskEntity } from "../entities/task.entity";

export interface TaskInterface {
    createTask(task: TaskEntity): Promise<TaskEntity | null>;
    getTaskById(id: string): Promise<TaskEntity | null | undefined>;
    getTasks(): Promise<TaskEntity[]>;
    updateTask(task: TaskEntity): Promise<TaskEntity | null>;
    deleteTask(id: string): Promise<boolean>;
}

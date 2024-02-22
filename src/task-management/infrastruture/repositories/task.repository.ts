import { TaskEntity } from "@src/task-management/domain/entities/task.entity";
import { TaskInterface } from "@src/task-management/domain/interfaces/task.interface";

export class TaskRepository implements TaskInterface {
    tasks: TaskEntity[] = [];

    async createTask(task: TaskEntity): Promise<TaskEntity | null> {
        this.tasks.push(task);
        return task;
    }

    async getTaskById(id: string): Promise<TaskEntity | null | undefined> {
        const task = this.tasks.find((task) => task.id === id);
        return task;
    }

    async getTasks(): Promise<TaskEntity[]> {
        return this.tasks;
    }

    async updateTask(task: TaskEntity): Promise<TaskEntity | null> {
        const index = this.tasks.findIndex((t) => t.id === task.id);
        if (index !== -1) {
            this.tasks[index] = task;
            return task;
        }
        return null;
    }

    async deleteTask(id: string): Promise<boolean> {
        const index = this.tasks.findIndex((t) => t.id === id);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            return true;
        }
        return false;
    }
}

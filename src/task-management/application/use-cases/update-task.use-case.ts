import { TaskEntity } from "@src/task-management/domain/entities/task.entity";
import { TaskInterface } from "@src/task-management/domain/interfaces/task.interface";

export class UpdateTaskUseCase {
    constructor(readonly repository: TaskInterface) { }
    async execute({id, title, description, status}: {id:string, title: string, description: string, status: boolean}) {
        try {
            const task = new TaskEntity(id, title, description, status);
            return await this.repository.updateTask(task);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
}

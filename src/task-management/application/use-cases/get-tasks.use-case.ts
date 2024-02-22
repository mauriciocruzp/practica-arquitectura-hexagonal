import { TaskEntity } from "@src/task-management/domain/entities/task.entity";
import { TaskInterface } from "@src/task-management/domain/interfaces/task.interface";

export class GetTasksUseCase {
    constructor(readonly repository: TaskInterface) { }

    async execute(): Promise<TaskEntity[] | null> {
        try {
            return await this.repository.getTasks();
        } catch (error) {
            console.log(error);
            return null
        }
    }
}

import { TaskEntity } from "@src/task-management/domain/entities/task.entity";
import { TaskInterface } from "@src/task-management/domain/interfaces/task.interface";

export class GetTaskUseCase {
    constructor(readonly repository: TaskInterface) { }

    async execute( id: string ): Promise<TaskEntity | null | undefined> {
        try {
            return await this.repository.getTaskById(id);
        } catch (error) {
            console.log(error);
            return null
        }
    }
}

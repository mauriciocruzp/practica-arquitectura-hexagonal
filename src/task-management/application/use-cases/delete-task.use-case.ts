import { TaskInterface } from "@src/task-management/domain/interfaces/task.interface";

export class DeleteTaskUseCase {
    constructor(readonly repository: TaskInterface) {}

    async execute (id: string) {
        try {
            return await this.repository.deleteTask(id);
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}

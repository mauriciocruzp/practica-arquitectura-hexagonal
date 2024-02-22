import { TaskEntity } from "@src/task-management/domain/entities/task.entity";
import { TaskInterface } from "@src/task-management/domain/interfaces/task.interface";

export class CreateTaskUseCase {
    constructor(readonly repository: TaskInterface) {}

    async execute({title, description, status}: {title: string, description: string, status: boolean}):
    Promise<TaskEntity | any> {
        try {
            const id = this.generateUuidField();
            let task = new TaskEntity(id, title,description,status);
            return await this.repository.createTask(task);
        }catch(error) {
            console.log(error);
        }
    }

    generateUuidField(): string {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0,
                v = c === "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
}

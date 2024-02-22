import { CreateTaskUseCase } from "@src/task-management/application/use-cases/create-task.use-case";
import { DeleteTaskUseCase } from "@src/task-management/application/use-cases/delete-task.use-case";
import { GetTaskUseCase } from "@src/task-management/application/use-cases/get-task.use-case";
import { UpdateTaskUseCase } from "@src/task-management/application/use-cases/update-task.use-case";
import { Request, Response } from "express";

export class TaskController {
    constructor(readonly createTaskUseCase: CreateTaskUseCase, readonly getTaskUseCase: GetTaskUseCase,
        readonly getTasksUseCase: GetTaskUseCase, readonly updateTaskUseCase: UpdateTaskUseCase,
        readonly deleteTaskUseCase: DeleteTaskUseCase) { }

    async createTask(req: Request, res: Response) {
        try {
            const task = await this.createTaskUseCase.execute(req.body);

            return res.status(201).json(task);
        } catch (error: any) {
            return res.status(error.http_status ?? 500)
                .json({
                    message: "Error to create task.",
                    error: error
                });
        }
    }

    async getTask(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const task = await this.getTaskUseCase.execute(id);

            return res.status(200).json(task);
        } catch (error: any) {
            return res.status(error.http_status ?? 500)
                .json({
                    message: "Error to get task.",
                    error: error
                });
        }
    }

    async getTasks(req: Request, res: Response) {
        try {
            const tasks = await this.getTasksUseCase.execute(req.params.id);

            return res.status(200).json(tasks);
        } catch (error: any) {
            return res.status(error.http_status ?? 500)
                .json({
                    message: "Error to get tasks.",
                    error: error
                });
        }
    }

    async updateTask(req: Request, res: Response) {
        try {
            const task = await this.updateTaskUseCase.execute(req.body);

            return res.status(200).json(task);
        } catch (error: any) {
            return res.status(error.http_status ?? 500)
                .json({
                    message: "Error to update task.",
                    error: error
                });
        }
    }

    async deleteTask(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const task = await this.deleteTaskUseCase.execute(id);

            return res.status(200).json(task);
        } catch (error: any) {
            return res.status(error.http_status ?? 500)
                .json({
                    message: "Error to delete task.",
                    error: error
                });
        }
    }
}

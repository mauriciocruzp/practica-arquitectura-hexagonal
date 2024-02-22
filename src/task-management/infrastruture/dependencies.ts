import { CreateTaskUseCase } from "../application/use-cases/create-task.use-case";
import { DeleteTaskUseCase } from "../application/use-cases/delete-task.use-case";
import { GetTaskUseCase } from "../application/use-cases/get-task.use-case";
import { GetTasksUseCase } from "../application/use-cases/get-tasks.use-case";
import { UpdateTaskUseCase } from "../application/use-cases/update-task.use-case";
import { TaskController } from "./controllers/task.controller";
import { TaskRepository } from "./repositories/task.repository";

const taskRepository = new TaskRepository();

const createTaskUseCase = new CreateTaskUseCase(taskRepository);
const getTaskUseCase = new GetTaskUseCase(taskRepository);
const getTasksUseCase = new GetTasksUseCase(taskRepository);
const updateTaskUseCase = new UpdateTaskUseCase(taskRepository);
const deleteTaskUseCase = new DeleteTaskUseCase(taskRepository);

export const taskController = new TaskController(createTaskUseCase, getTaskUseCase, getTaskUseCase, updateTaskUseCase, deleteTaskUseCase);

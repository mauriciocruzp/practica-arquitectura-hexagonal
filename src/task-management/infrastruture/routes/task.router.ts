import express from "express";
import { taskController } from "../dependencies";

export const taskManagementRouter = express.Router();

taskManagementRouter.post('/', taskController.createTask.bind(taskController))
taskManagementRouter.get('/:id', taskController.getTask.bind(taskController))
taskManagementRouter.get('/', taskController.getTasks.bind(taskController))
taskManagementRouter.put('/', taskController.updateTask.bind(taskController))
taskManagementRouter.delete('/:id', taskController.deleteTask.bind(taskController))

import express from "express";
import * as TaskControllers from "../controllers/task.controller";

export const taskRouter = express.Router();

taskRouter.get("/tasks", TaskControllers.getAllTasks);
taskRouter.get("/tasks/:id", TaskControllers.getOneTask);
taskRouter.post("/tasks", TaskControllers.createTask);
taskRouter.patch("/tasks", TaskControllers.updateTask);
taskRouter.delete("/tasks/:id", TaskControllers.deleteTask);

import { prisma } from "../app";
import { NewTask, TaskToUpdate } from "../types";

export const getAllTasks = async () => {
  const tasks = await prisma.task.findMany();
  return tasks;
};

export const getOneTask = async (id: number) => {
  const task = await prisma.task.findUnique({ where: { id } });
  return task;
};

export const createTask = async (newTask: NewTask) => {
  const task = await prisma.task.create({
    data: { ...newTask },
  });

  return task;
};

export const updateTask = async (task: TaskToUpdate) => {
  const updatedTask = await prisma.task.update({
    where: { id: task.id },
    data: { ...task },
  });

  return updatedTask;
};

export const deleteTask = async (id: number) => {
  await prisma.task.delete({ where: { id } });
};

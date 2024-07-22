import { StatusCodes as STATUS_CODES } from "http-status-codes";
import * as TaskServices from "../services/task.service";
import { Controller, NewTask, TaskToUpdate } from "../types";
import { MESSAGES } from "../utils/Messages";

export const getAllTasks: Controller = async (req, res, next) => {
  try {
    const result = await TaskServices.getAllTasks();
    if (!result) {
      res
        .header(STATUS_CODES.NOT_FOUND)
        .send({ message: MESSAGES.get.failure });
    }

    res.header(STATUS_CODES.OK).send(result);
  } catch (err) {
    next(err);
  }
};

export const getOneTask: Controller = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id || isNaN(Number(id))) {
      res
        .header(STATUS_CODES.NOT_FOUND)
        .send({ message: MESSAGES.get.failure });
    }

    const result = await TaskServices.getOneTask(Number(id));
    if (!result) {
      res
        .header(STATUS_CODES.NOT_FOUND)
        .send({ message: MESSAGES.get.failure });
    }

    res.header(STATUS_CODES.OK).send(result);
  } catch (err) {
    next(err);
  }
};

export const createTask: Controller = async (req, res, next) => {
  try {
    const newTask = req.body as NewTask;
    const result = await TaskServices.createTask(newTask);
    const url = `${process.env.SERVER_URL}/tasks/${result.id}`;

    res
      .status(STATUS_CODES.CREATED)
      .header("Location", `${url}`)
      .send({ message: MESSAGES.post.success, resourceURL: url });
  } catch (err) {
    next(err);
  }
};

export const updateTask: Controller = async (req, res, next) => {
  try {
    const taskToUpdate = req.body as TaskToUpdate;
    const result = await TaskServices.updateTask(taskToUpdate);
    if (!result) {
      res
        .status(STATUS_CODES.NOT_FOUND)
        .send({ message: MESSAGES.patch.failure });
    }

    res.status(STATUS_CODES.NO_CONTENT).send(result);
  } catch (err) {
    next(err);
  }
};

export const deleteTask: Controller = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id || isNaN(Number(id))) {
      res
        .status(STATUS_CODES.NOT_FOUND)
        .send({ message: MESSAGES.delete.failure });
    }

    res.status(STATUS_CODES.OK).send({ message: MESSAGES.delete.success });
  } catch (err) {
    next(err);
  }
};

import { StatusCodes as STATUS_CODES } from "http-status-codes";

import { Controller } from "../types";

export const root: Controller = async (req, res, next) => {
  res.status(STATUS_CODES.OK).send({
    message: "Backend for Task Manager",
    endpoints: {
      getAll: "/tasks",
      getOne: "/tasks/:id",
      create: "/tasks",
      update: "/tasks",
      delete: "/tasks/:id",
    },
  });
};

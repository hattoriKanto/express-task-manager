import { NextFunction, Response, Request } from "express";
import { StatusCodes as STATUS_CODES } from "http-status-codes";

import { MESSAGES } from "../utils/Messages";

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(STATUS_CODES.NOT_FOUND).send({ message: MESSAGES.errorRoutes });
};

export const serverErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error({ message: err.message, stack: err.stack });
  res
    .status(STATUS_CODES.INTERNAL_SERVER_ERROR)
    .send({ message: MESSAGES.errorServer });
};

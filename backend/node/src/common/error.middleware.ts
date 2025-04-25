/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

import httpStatus from "../const/httpStatus";
import logger from "../logger";

const errorMiddleware: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  logger.error(
    `Error occurred for request ID: ${JSON.stringify(req.id)}. Message: ${JSON.stringify(
      err.message,
    )}`,
  );
  const { message, statusCode } = err;

  res.status(statusCode || httpStatus.forbidden).json({
    errors: err.errors,
    message: message,
    stack: err.stack,
    success: "false",
  });
};

export default errorMiddleware;

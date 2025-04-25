/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

import APP_ENVS from "../config/envs";
import APP_CONSTS from "../const";
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
    message: message,
    stack:
      APP_ENVS.ENV !== APP_CONSTS.ENVIRONMENTS.DEVELOPMENT
        ? err.stack
        : undefined,
    success: "false",
  });
};

export default errorMiddleware;

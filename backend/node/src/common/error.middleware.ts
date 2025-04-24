/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Response, Request, NextFunction, ErrorRequestHandler } from "express";

import APP_ENVS from "../config/envs";
import APP_CONSTS from "../const";
import httpStatus from "../const/httpStatus";
import logger from "../logger";

const errorMiddleware: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(
    `Error occurred for request ID: ${req.id}. Message: ${JSON.stringify(
      err.message
    )}`
  );
  const { message, statusCode } = err;

  res.status(statusCode || httpStatus.forbidden).json({
    success: "false",
    message: message,
    stack:
      APP_ENVS.ENV !== APP_CONSTS.ENVIRONMENTS.DEVELOPMENT
        ? err.stack
        : undefined,
  });
};

export default errorMiddleware;

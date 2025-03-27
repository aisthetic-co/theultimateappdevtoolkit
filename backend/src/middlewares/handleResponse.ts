import { Response, Request, NextFunction, ErrorRequestHandler } from "express";

import logger from "../logger";
import httpStatus from "../util/httpStatus";

export const handleResponse: ErrorRequestHandler = (
  data: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (data instanceof Error) {
    return next(data);
  }
  if (data) {
    const message = data.message;
    const statusCode = data.statusCode;
    if (data.message) {
      delete data.message;
    }
    if (data.statusCode) {
      delete data.statusCode;
    }
    if (Object.keys(data).length == 0) {
      data = undefined;
    }
    return res.status(statusCode || httpStatus.ok).json({
      success: true,
      message: message,
      data,
    });
  } else {
    logger.error(`No data received in global response handler`);
    return res.status(httpStatus.internalServerError).json({
      success: false,
      message: "No data received in global response handler",
    });
  }
};

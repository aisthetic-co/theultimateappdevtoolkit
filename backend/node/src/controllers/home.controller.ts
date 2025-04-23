import { NextFunction, Request, Response } from "express";

import config from "../config";
import homeService from "../services/cache/home.service";
import httpStatus from "../util/httpStatus";

const healthCheck = async (req: Request, res: Response, next: NextFunction) => {
  const { healthCheck, error } = await homeService.healthCheck();

  if (error) {
    return res.status(httpStatus.serviceUnavailable).json(healthCheck);
  }

  next(healthCheck);
};

const sayHello = (req: Request, res: Response, next: NextFunction) => {
  next({ message: `Hello from ${config.SERVER_NAME} server` });
};

export default { healthCheck, sayHello };

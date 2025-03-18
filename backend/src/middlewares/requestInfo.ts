import { Response, Request, NextFunction } from "express";

import config from "../config";
import logger from "../logger";

const sensitiveDataKeys = ["password", "confirmPassword", "token"];

const requestInfo = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  // Check if the request is for the health check endpoint
  if (req.path === `${config.PREFIX}/health`) {
    return next(); // Skip logging and proceed to the next middleware
  }
  const ip =
    req.headers?.["x-forwarded-for"] || req.ip || req.socket["remoteAddress"];
  const path = req.path;
  const params = req.params;
  const query = req.query;
  const method = req.method;
  const body = { ...req.body };
  const origin = req.headers?.origin;

  sensitiveDataKeys.forEach((key) => delete body[key]);

  const infoObject = {
    ip,
    path,
    body,
    params,
    query,
    method,
    origin,
  };

  logger.info(`Request Info - ${JSON.stringify(infoObject)}`);

  next();
};

export default requestInfo;

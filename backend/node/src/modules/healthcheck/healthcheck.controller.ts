import os from "os";

import { Request, Response } from "express";

import APP_ENVS from "../../config/envs";
import httpStatus from "../../const/httpStatus";

const healthCheck = async (req: Request, res: Response) => {
  const healthCheckResponse = {
    uptime: process.uptime(),
    message: "OK",
    timestamp: new Date(),
    server: {
      name: APP_ENVS.SERVER_NAME,
      hostname: os.hostname(),
    },
  };

  res.status(httpStatus.ok).json({
    message: "Health check successful",
    data: healthCheckResponse,
  });
};

const sayHello = async (req: Request, res: Response) => {
  res.status(httpStatus.ok).json({
    message: `Hello from ${APP_ENVS.SERVER_NAME} server`,
  });
};

export default { healthCheck, sayHello };

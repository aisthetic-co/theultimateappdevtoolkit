import { Request, Response } from "express";
import os from "os";

import APP_ENVS from "../../config/envs";
import httpStatus from "../../const/httpStatus";

const healthCheck = async (req: Request, res: Response) => {
  const healthCheckResponse = {
    server: {
      hostname: os.hostname(),
      name: APP_ENVS.SERVER_NAME,
    },
    timestamp: new Date(),
    uptime: process.uptime(),
  };

  res.status(httpStatus.ok).json({
    data: healthCheckResponse,
    message: "Health check successful",
  });
};

const sayHello = async (req: Request, res: Response) => {
  const { name } = req.body;

  res.status(httpStatus.ok).json({
    message: `Hello, ${name ?? "World"}!`,
  });
};

export default { healthCheck, sayHello };

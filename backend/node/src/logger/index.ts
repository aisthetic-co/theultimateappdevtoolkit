// logger.js
import pino from "pino";

import APP_ENVS from "../config/envs";
import APP_CONSTS from "../const";
import getDevLogger from "./devLogger";
import getProdLogger from "./prodLogger";

const getLogger = () => {
  try {
    const devLogger = getDevLogger();
    const prodLooger = getProdLogger();

    const logger =
      APP_ENVS.ENV === APP_CONSTS.ENVIRONMENTS.DEVELOPMENT
        ? devLogger
        : prodLooger;

    logger.info(
      {
        env: APP_ENVS.ENV,
        nodeVersion: process.version,
        pid: process.pid,
      },
      "Logger initialized successfully",
    );
    return logger;
  } catch (error) {
    console.error("Error initializing logger:", error);
    const logger = pino({
      level: APP_CONSTS.LOG_LEVELS.INFO,
      timestamp: true,
    });

    return logger;
  }
};

export default getLogger();

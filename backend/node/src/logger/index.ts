// logger.js
import pino from "pino";

import config from "../config";

import getDevLogger from "./devLogger";
import getProdLogger from "./prodLogger";

const getLogger = () => {
  try {
    const devLogger = getDevLogger();
    const prodLooger = getProdLogger();

    const logger =
      config.env === config.ENVIRONMENTS.DEVELOPMENT ? devLogger : prodLooger;

    logger.info(
      {
        env: config.env,
        nodeVersion: process.version,
        pid: process.pid,
      },
      "Logger initialized successfully"
    );
    return logger;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error initializing logger:", error);
    const logger = pino({
      level: config.LOG_LEVELS.INFO,
      timestamp: true,
    });

    return logger;
  }
};

export default getLogger();

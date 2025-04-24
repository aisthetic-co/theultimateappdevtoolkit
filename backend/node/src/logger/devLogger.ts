// logger.js
import pino from "pino";

import config from "../config";

const redactPaths = [
  "name",
  "address",
  "passport",
  "phone",
  "user.name",
  "user.address",
  "user.passport",
  "user.phone",
  "*.user.name", // * is a wildcard covering a depth of 1
  "*.user.address",
  "*.user.passport",
  "*.user.phone",
  "password",
  "confirmPassword",
  "token",
];

const getDevLogger = () => {
  const logger = pino({
    level: config.LOG_LEVELS.DEBUG,
    transport: {
      targets: [
        {
          target: "pino-pretty",
          level: config.LOG_LEVELS.DEBUG,
          options: {
            colorize: true,
            levelFirst: true,
            translateTime: "SYS:standard",
          },
        },
      ],
    },
    redact: {
      paths: redactPaths,
      remove: true,
    },
  });

  return logger;
};

export default getDevLogger;

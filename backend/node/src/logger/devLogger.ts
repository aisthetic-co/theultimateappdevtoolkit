// logger.js
import pino from "pino";

import APP_CONSTS from "../const";

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
    level: APP_CONSTS.LOG_LEVELS.DEBUG,
    redact: {
      paths: redactPaths,
      remove: true,
    },
    transport: {
      targets: [
        {
          level: APP_CONSTS.LOG_LEVELS.DEBUG,
          options: {
            colorize: true,
            levelFirst: true,
            translateTime: "SYS:standard",
          },
          target: "pino-pretty",
        },
      ],
    },
  });

  return logger;
};

export default getDevLogger;

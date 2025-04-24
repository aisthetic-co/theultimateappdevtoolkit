// logger.js
import path from "path";

import pino from "pino";

import APP_CONFIG from "../config";
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

const getProdLogger = () => {
  const logger = pino({
    level: APP_CONSTS.LOG_LEVELS.INFO,
    timestamp: () => `,"timestamp":"${new Date().toISOString()}"`,
    messageKey: "message",
    base: {
      env: process.env.NODE_ENV,
      version: process.env.npm_package_version,
    },
    transport: {
      targets: [
        {
          target: "pino/file",
          level: "info",
          options: {
            destination: path.join(
              __dirname,
              `${APP_CONFIG.LOG_PATH}/app.logs`
            ),
            mkdir: true,
            sync: false,
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

export default getProdLogger;

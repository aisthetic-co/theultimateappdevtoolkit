// logger.js
import path from "path";
import { dirname } from "path";
import pino from "pino";
import { fileURLToPath } from "url";

import APP_CONFIG from "../config";
import APP_CONSTS from "../const";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
    base: {
      env: process.env.NODE_ENV,
      version: process.env.npm_package_version,
    },
    level: APP_CONSTS.LOG_LEVELS.INFO,
    messageKey: "message",
    redact: {
      paths: redactPaths,
      remove: true,
    },
    timestamp: () => `,"timestamp":"${new Date().toISOString()}"`,
    transport: {
      targets: [
        {
          level: "info",
          options: {
            destination: path.join(
              __dirname,
              `${APP_CONFIG.LOG_PATH}/app.logs`,
            ),
            mkdir: true,
            sync: false,
          },
          target: "pino/file",
        },
      ],
    },
  });
  return logger;
};

export default getProdLogger;

import moment from "moment";
import { createLogger, format, transports } from "winston";
import WinstonCloudWatch from "winston-cloudwatch";

import config from "../config";

const { combine, timestamp, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `[${level}] ${timestamp}: ${message}`;
});

const prodLogger = () => {
  // Initialize transports array with common transports
  const loggerTransports: any[] = [
    new transports.Console({ level: "debug" }),
    new transports.File({ filename: "error.log", level: "error" }),
    new transports.File({ filename: "combine.log" }),
  ];

  // Add CloudWatch transports only if configured
  if (config.CLOUDWATCH) {
    loggerTransports.push(
      new WinstonCloudWatch({
        level: "info",
        logGroupName: config.CLOUDWATCH.logName,
        logStreamName: moment().format("DD-MM-YYYY"),
        awsRegion: config.CLOUDWATCH.region,
        awsOptions: {
          credentials: {
            accessKeyId: config.CLOUDWATCH.accessKeyId,
            secretAccessKey: config.CLOUDWATCH.secretAccessKey,
          },
        },
      }),
      new WinstonCloudWatch({
        level: "error",
        logGroupName: `${config.CLOUDWATCH.logName}-error`,
        logStreamName: moment().format("DD-MM-YYYY"),
        awsRegion: config.CLOUDWATCH.region,
        awsOptions: {
          credentials: {
            accessKeyId: config.CLOUDWATCH.accessKeyId,
            secretAccessKey: config.CLOUDWATCH.secretAccessKey,
          },
        },
      })
    );
  }

  return createLogger({
    level: "info",
    format: combine(timestamp(), myFormat),
    transports: loggerTransports,
    exceptionHandlers: [new transports.File({ filename: "exceptions.log" })],
  });
};

export default prodLogger;

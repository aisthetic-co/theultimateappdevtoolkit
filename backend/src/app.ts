import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application, Request } from "express";
import mongoSanitize from "express-mongo-sanitize";
import helmet from "helmet";
import morgan from "morgan";
import responseTime from "response-time";
import xss from "xss-clean";

import config from "./config";
import logger from "./logger";
import { errorHandler, notFound } from "./middlewares/error";
import { handleResponse } from "./middlewares/handleResponse";
import requestId from "./middlewares/requestId";
import requestInfo from "./middlewares/requestInfo";
import router from "./routes";

const app: Application = express();

app.use(cors());

// Limited to development environment
if (config.env === "development") {
  app.use(morgan("dev"));
}
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(requestId);

// Sanitize user-generated content
app.use(xss());
app.use(mongoSanitize());

app.use(
  responseTime((req: Request, res, time) => {
    logger.info(
      `Request id: ${req.id}, Response time: ${req.method} ${req.url} ${
        res.statusCode
      } ${time.toFixed(3)}ms`
    );
  })
);

// log all request data
app.use(requestInfo);

app.use(`${config.PREFIX}`, router);

app.use(notFound);
app.use(handleResponse);
app.use(errorHandler);

export default app;

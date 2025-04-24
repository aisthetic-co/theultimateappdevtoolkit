import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application } from "express";
import helmet from "helmet";

import config from "./config";
import { errorHandler, notFound } from "./middlewares/error";
import { handleResponse } from "./middlewares/handleResponse";
import pinoLogger from "./middlewares/logger";
import router from "./routes";

const app: Application = express();

app.use(cors());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.json());
app.use(helmet());

app.use(pinoLogger());
app.use(`${config.PREFIX}`, router);

app.use(notFound);
app.use(handleResponse);
app.use(errorHandler);

export default app;

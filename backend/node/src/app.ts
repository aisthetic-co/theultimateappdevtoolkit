import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";

import errorMiddleware from "./common/error.middleware";
import pinoLogger from "./common/logger.middleware";
import notFound from "./common/notFound.middleware";
import router from "./routes";

const app = express();

app.use(cors());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.json());
app.use(helmet());

app.use(pinoLogger());
app.use("/api/v1", router);

app.use(notFound);
app.use(errorMiddleware);

export default app;

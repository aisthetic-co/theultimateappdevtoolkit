import * as dotenv from "dotenv";
import env from "env-var";

dotenv.config();

const isProduction =
  env.get("NODE_ENV").default("development").asString() === "production";

const config = {
  PORT: env.get("PORT").default("4000").asString(),
  env: env.get("NODE_ENV").default("development").asString(),
  PREFIX: env.get("PREFIX").default("/api").asString(),
  DB_URL: env
    .get("DB_URL")
    .default("mongodb://127.0.0.1:27017/typescript")
    .required()
    .asString(),

  REDIS: {
    HOST: env.get("REDIS_HOST").default("127.0.0.1").asString(),
    PORT: env.get("REDIS_PORT").default(6379).asIntPositive(),
  },

  SERVER_NAME: env.get("SERVER_NAME").default("localServer").asString(),

  CLOUDWATCH: isProduction
    ? {
        accessKeyId: env.get("CLOUDWATCH_ACCESS_ID").required().asString(),
        secretAccessKey: env
          .get("CLOUDWATCH_SECRET_ACCESS_KEY")
          .required()
          .asString(),
        region: env.get("CLOUDWATCH_REGION").required().asString(),
        logName: env.get("CLOUDWATCH_LOG_NAME").required().asString(),
      }
    : undefined,
};

export default config;

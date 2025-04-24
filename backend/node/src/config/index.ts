import * as dotenv from "dotenv";
import env from "env-var";

dotenv.config();

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

  LOG_LEVELS: {
    TRACE: "trace",
    DEBUG: "debug",
    INFO: "info",
    WARN: "warn",
    ERROR: "error",
    FATAL: "fatal",
  },
  ENVIRONMENTS: {
    DEVELOPMENT: "development",
    STAGING: "staging",
    PRODUCTION: "production",
  },
};

export default config;

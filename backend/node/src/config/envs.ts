import * as dotenv from "dotenv";
import env from "env-var";

dotenv.config();

const APP_ENVS = {
  API_URL: env.get("API_URL").default("http://localhost:4000/api").asString(),
  ENV: env.get("NODE_ENV").default("development").asString(),
  PORT: env.get("PORT").default("4000").asString(),
  PREFIX: env.get("PREFIX").default("/api").asString(),
  SERVER_NAME: env.get("SERVER_NAME").default("localServer").asString(),
};

export default APP_ENVS;

import app from "./app";
import APP_ENVS from "./config/envs";
import logger from "./logger";

app.listen(APP_ENVS.PORT, (): void => {
  logger.info(`Server started successfully on port ${APP_ENVS.PORT}`);
});

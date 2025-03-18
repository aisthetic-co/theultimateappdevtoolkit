import os from "os";

import config from "../../config";
import logger from "../../logger";

import { clearCache, getCache, setCache } from "./manager";

const healthCheck = async () => {
  const healthCheckResponse = {
    uptime: process.uptime(),
    message: "OK",
    timestamp: new Date(),
    server: {
      name: config.SERVER_NAME,
      hostname: os.hostname(),
    },
    dependencies: {
      redis: "unknown",
    },
  };

  const redisKey = "healthCheck";

  try {
    const setResult = await setCache(redisKey, "ok", 10);

    if (!setResult) {
      healthCheckResponse.dependencies.redis = "unhealthy";
      // Return unhealthy status if Redis is not set
      return { healthCheck: healthCheckResponse, error: true };
    } else {
      const cachedValue = await getCache(redisKey);
      healthCheckResponse.dependencies.redis =
        cachedValue === "ok" ? "healthy" : "unhealthy";
    }

    // Check if any dependencies are unhealthy
    const isHealthy = Object.values(healthCheckResponse.dependencies).every(
      (status) => status === "healthy"
    );

    if (!isHealthy) {
      // If any dependency is unhealthy, mark overall health as false
      return { healthCheck: healthCheckResponse, error: true };
    }

    return { healthCheck: healthCheckResponse, error: null };
  } catch (error) {
    logger.error("Health check failed:", error);
    healthCheckResponse.message = "Unhealthy";
    healthCheckResponse.dependencies.redis = "unhealthy";

    return { healthCheck: healthCheckResponse, error: true };
  } finally {
    await clearCache(redisKey);
  }
};

export default { healthCheck };

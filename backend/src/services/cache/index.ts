import Redis from "ioredis";

import config from "../../config";
import logger from "../../logger";

// Create a Redis client instance
const client = new Redis({
  port: config.REDIS.PORT,
  host: config.REDIS.HOST,
  // Optional: Add other configurations if needed
  retryStrategy: (times) => {
    // Stop retrying after 3 attempts
    if (times >= 3) return null; // Return null to stop retrying
    return Math.min(times * 100, 3000); // Retry after increasing intervals
  },
});

client.on("error", (err) => {
  logger.error("Redis connection error:", err.message);
});

client.on("connect", () => {
  logger.info("Connected to Redis");
});

const shutdown = async () => {
  logger.info("Closing Redis connection...");
  await client.quit();
  process.exit(0);
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

export default client;

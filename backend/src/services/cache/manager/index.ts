import client from "..";
import config from "../../../config";
import { expiry } from "../../../config/cacheTimings";
import logger from "../../../logger";

interface CacheKeyManagerParams {
  keyPrefix: string;
  expiry?: number;
}

export const setCache = async (
  key: string,
  value: unknown,
  duration: number
): Promise<boolean> => {
  try {
    await client.setex(key, duration, JSON.stringify(value));
    return true;
  } catch (error) {
    logger.error(`Redis Set Error - ${JSON.stringify(error)}`);
    return false;
  }
};

export const getCache = async (key: string): Promise<unknown | null> => {
  try {
    const data = await client.get(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    logger.error(`Redis Get Error - ${JSON.stringify(error)}`);
    return null; // Return null on error
  }
};

export const clearCache = async (key: string): Promise<boolean> => {
  try {
    await client.del(key);
    return true;
  } catch (error) {
    logger.error(`Redis Delete Error - ${JSON.stringify(error)}`);
    return false;
  }
};

class CacheKeyManager {
  private keyPrefix: string;
  private expiry: number;

  constructor(params: CacheKeyManagerParams) {
    this.keyPrefix = params.keyPrefix;
    this.expiry = params.expiry ?? expiry.default;
  }

  private generateKey(...params: unknown[]): string {
    const keyParts = [config.SERVER_NAME, config.env, this.keyPrefix];

    const filteredParams = params.filter(
      (param) => param != null && param.toString().length > 0
    );

    return [...keyParts, ...filteredParams].join("_");
  }

  async getCache(...params: unknown[]): Promise<unknown | null> {
    const key = this.generateKey(...params);
    return getCache(key);
  }

  async setCache(value: unknown, ...params: unknown[]): Promise<boolean> {
    const key = this.generateKey(...params);
    return setCache(key, value, this.expiry);
  }

  async clearCache(...params: unknown[]): Promise<boolean> {
    const key = this.generateKey(...params);
    return clearCache(key);
  }
}

export default CacheKeyManager;

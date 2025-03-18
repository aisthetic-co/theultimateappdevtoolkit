import { NextFunction, Request, Response } from "express";

import { expiry } from "../config/cacheTimings";
import logger from "../logger";
import CacheKeyManager from "../services/cache/manager";

interface CacheOptions {
  getKey?: (_req: Request) => string;
  expiry?: number;
}

const cacheMiddleware = (options: CacheOptions = {}) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const keyManager = new CacheKeyManager({
      keyPrefix: `Caching`,
      expiry: options.expiry || expiry.default,
    });

    const key = options.getKey ? options.getKey(req) : req.url;

    try {
      const data = await keyManager.getCache(key);

      if (data) {
        res.setHeader("X-Cache", "HIT");
        res.json(data);
      } else {
        res.setHeader("X-Cache", "MISS");
        const originalSend = res.json.bind(res);

        res.json = (body) => {
          keyManager.setCache(body, key);
          return originalSend(body);
        };

        next();
      }
    } catch (err) {
      logger.error(`Redis error in cache middleware: ${JSON.stringify(err)}`);
      next();
    }
  };
};

export default cacheMiddleware;

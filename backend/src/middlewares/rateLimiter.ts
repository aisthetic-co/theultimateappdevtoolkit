import { NextFunction, Response, Request } from "express";

import ApiError from "../helper/ApiError";
import asyncHandler from "../helper/asyncHandler";
import logger from "../logger";
import client from "../services/cache";
import { getCache, setCache } from "../services/cache/manager";
import { getIpFromReq } from "../util";
import httpStatus from "../util/httpStatus";

interface RateLimiterParams {
  maxRequests: number;
  durationSeconds: number;
  forSpecificUserId?: boolean;
  message?: string;
}

export default function rateLimiter(params: RateLimiterParams) {
  return asyncHandler(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      const { maxRequests, durationSeconds, forSpecificUserId, message } =
        params;

      if (req.headers.bypassratelimiter) {
        next();
        return;
      }

      const identifier = getIpFromReq(req);

      if (!identifier) {
        logger.warn(
          `RateLimiter: Unable to find IP or userId for rate limiter - Path: ${req.path}`
        );
        next();
        return;
      }

      const prefix = forSpecificUserId && identifier;
      const key = `RATELIMITERKEY_${prefix}_${req.path}`;

      let totalRequests = (await getCache(key)) as null | number;
      totalRequests = totalRequests !== null ? Number(totalRequests) : 0;

      if (totalRequests === 0) {
        setCache(key, 1, durationSeconds);
      }

      if (totalRequests === 1) {
        client.expire(key, durationSeconds);
      }

      if (totalRequests > maxRequests) {
        throw new ApiError(
          httpStatus.tooManyRequests,
          `Too many requests! Please try again after ${durationSeconds} seconds.`
        );
      }

      client.incr(key);
      next();
    }
  );
}

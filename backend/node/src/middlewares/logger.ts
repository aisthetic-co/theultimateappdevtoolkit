import { randomUUID } from "node:crypto";

import { pinoHttp } from "pino-http";

import logger from "../logger";

const pinoLogger = () => {
  return pinoHttp({
    logger: logger,
    genReqId: function (req, res) {
      const existingID = req.id ?? req.headers["X-Request-Id"];
      if (existingID) return existingID;
      const id = randomUUID();
      res.setHeader("X-Request-Id", id);
      return id;
    },
  });
};

export default pinoLogger;

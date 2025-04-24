import { NextFunction, Request, Response } from "express";

import httpStatus from "../const/httpStatus";
import CustomError from "../utils/customError";

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new CustomError(
    `Not Found - ${req.originalUrl}`,
    httpStatus.notFound
  );

  next(error);
};

export default notFound;

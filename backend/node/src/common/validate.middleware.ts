/**
 * CREDITS
 * UPDATE: Updated the zod validation middleware🚑️https://jeffsegovia.dev/blogs/rest-api-validation-using-zod
 * https://www.imadatyat.me/guides/schema-validation-with-zod-and-expressjs
 */
import { NextFunction, Request, Response } from "express";
import { AnyZodObject, z, ZodOptional } from "zod";

import httpStatus from "../const/httpStatus";
import { IError } from "../types/error";
import CustomError from "../utils/customError";

const validate =
  (schema: AnyZodObject | ZodOptional<AnyZodObject>) =>
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const parsedResponse = await schema.parseAsync({
          body: req.body,
          params: req.params,
          query: req.query,
        });

        req.body = parsedResponse?.body;
        req.params = parsedResponse?.params;
        req.query = parsedResponse?.query;

        return next();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        // Zod Validation Error
        let errors: IError[] = [];
        if (err instanceof z.ZodError) {
          errors = err.issues.map((e) => ({
            code: `invalid_${e.path[e.path.length - 1]}`,
            message: e.message,
            path: e.path.join("."),
          }));
        }
        return next(
          new CustomError("Validation Failed", httpStatus.badRequest, [...errors])
        );
      }
    };

export default validate;

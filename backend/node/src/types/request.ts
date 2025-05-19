import { Request } from "express";

interface CustomRequest extends Request {
  parsedQuery?: Record<string, unknown>;
}

export default CustomRequest;

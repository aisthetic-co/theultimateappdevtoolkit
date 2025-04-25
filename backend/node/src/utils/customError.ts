import { IError } from "../types/error";

class CustomError extends Error {
  errors: unknown[];
  statusCode: number;

  constructor(message: string, statusCode: number, errors?: IError[]) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
  }
}

export default CustomError;

import { IError } from "../types/error";

class CustomError {
  errors;
  message: string;
  statusCode: number;

  constructor(message: string, statusCode: number, errors?: IError[]) {
    this.statusCode = statusCode;
    this.errors = errors;
    this.message = message;
  }
}

export default CustomError;

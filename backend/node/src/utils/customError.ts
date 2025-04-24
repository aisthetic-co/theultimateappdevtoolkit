import { IError } from "../types/error";

class CustomError {
  statusCode: number;
  errors;
  message: string;

  constructor(message: string, statusCode: number, errors?: IError[]) {
    this.statusCode = statusCode;
    this.errors = errors;
    this.message = message;
  }
}

export default CustomError;

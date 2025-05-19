import { IError } from "../types/error";

class CustomError {
  errors;
  message: string;
  statusCode: number;

  constructor(message: string, statusCode: number, errors?: IError[]) {
    this.message = message;
    this.statusCode = statusCode;
    this.errors = errors;
  }
}

export default CustomError;

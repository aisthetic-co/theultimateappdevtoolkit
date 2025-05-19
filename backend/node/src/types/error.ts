interface IError extends Partial<Error> {
  code: string;
  message: string;
  path?: string;
}

export type { IError };

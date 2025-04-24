interface IError extends Partial<Error> {
  path?: string;
  code: string;
  message: string;
}

export type { IError };

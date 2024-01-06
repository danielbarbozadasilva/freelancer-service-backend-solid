import { Response } from 'express';

interface CustomError {
  statusCode?: number;
  message?: string;
}

export const formatError = (err: CustomError, res: Response): void => {
  const { statusCode = 500, message = 'An unexpected error has occurred' } = err;

  res.status(statusCode).json({
    statusCode,
    message,
  });
};
  
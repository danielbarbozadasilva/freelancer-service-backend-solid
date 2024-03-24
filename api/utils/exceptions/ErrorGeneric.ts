import status from 'http-status';

const defaultMessage = 'an error happened';

export default class ErrorGeneric extends Error {
  public statusCode: number;

  constructor(message?: string) {
    super(message);
    Error.captureStackTrace(this, ErrorGeneric);
    this.statusCode = status.INTERNAL_SERVER_ERROR;
    this.message = message || defaultMessage;
  }
}
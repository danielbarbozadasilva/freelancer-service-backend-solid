import status from 'http-status';
import ErrorGeneric from './erros.generic-error';

const defaultMessage = 'User is not allowed';

export default class ErrorNotAuthorized extends ErrorGeneric {
  public statusCode: number;

  constructor(message?: string) {
    super(message);
    Error.captureStackTrace(this, ErrorNotAuthorized);
    this.statusCode = status.FORBIDDEN;
    this.message = message || defaultMessage;
  }
}
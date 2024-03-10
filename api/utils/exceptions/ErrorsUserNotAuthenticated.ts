import * as status from 'http-status';
import ErrorGeneric from './ErrorGeneric';

const defaultMessage = 'User is not authorized';

export default class ErrorNotAuthenticated extends ErrorGeneric {
  public statusCode: number;

  constructor(message?: string) {
    super(message || defaultMessage);
    Error.captureStackTrace(this, ErrorNotAuthenticated);
    this.statusCode = 401;
  }
}
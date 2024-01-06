import status from 'http-status';
import ErrorGeneric from './erros.generic-error';

const defaultMessage = 'A business mistake happened';

export default class ErrorBusinessRule extends ErrorGeneric {
  public statusCode: number;

  constructor(message?: string) {
    super(message);
    Error.captureStackTrace(this, ErrorBusinessRule);
    this.statusCode = status.BAD_REQUEST;
    this.message = message || defaultMessage;
  }
}
import status from 'http-status';
import ErrorGeneric from './ErrorGeneric';

const defaultMessage = 'Could not process the instructions present';

export default class ErrorUnprocessableEntity extends ErrorGeneric {
  public statusCode: number;

  constructor(message?: string) {
    super(message);
    Error.captureStackTrace(this, ErrorUnprocessableEntity);
    this.statusCode = status.UNPROCESSABLE_ENTITY;
    this.message = message || defaultMessage;
  }
}
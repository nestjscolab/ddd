import { BROKEN_RULES_EXCEPTION } from './constants';
import { DomainExceptionBase } from './exception.base';

export class BrokenRulesException extends DomainExceptionBase {
  code: string;
  constructor(
    public message: string,
    cause?: Error,
    metadata?: unknown,
  ) {
    super(message, cause, metadata);

    this.code = BROKEN_RULES_EXCEPTION;
  }
}

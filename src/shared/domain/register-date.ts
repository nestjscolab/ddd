/* eslint-disable @typescript-eslint/no-unused-vars */
import { DomainDateValueObject, IDomainPrimitive } from '../../../libs/ddd/src';

export class RegisterDate extends DomainDateValueObject {
  protected businessRules(props: IDomainPrimitive<Date>): void {
    //
  }

  constructor(value: Date) {
    super(value);
  }

  static create(value: Date): RegisterDate {
    return new RegisterDate(value);
  }
}

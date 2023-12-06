import { DomainIdAsString, IDomainPrimitive } from '@nestjslatam/ddd-lib';

import { v4 } from 'uuid';

export class Id extends DomainIdAsString {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected businessRules(props: IDomainPrimitive<string>): void {
    //
  }

  static create(): Id {
    return new Id(v4().toString());
  }

  static load(value: string): Id {
    return new Id({ value });
  }
}

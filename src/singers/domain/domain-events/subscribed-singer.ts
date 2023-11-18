import { DomainEvent } from '../../../../libs/ddd/src';

export class SubscribedSingerEvent extends DomainEvent {
  constructor(readonly singerId: string, readonly singerName: string) {
    super({
      aggregateId: singerId,
      eventName: SubscribedSingerEvent.name,
    });
  }
  toPlain() {
    return {
      singerId: this.singerId,
      songName: this.singerName,
      status: 'subscribed',
    };
  }
}

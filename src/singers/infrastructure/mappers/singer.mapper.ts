import { TrackingProps } from '@nestjslatam/ddd-lib';

import { SingerTable } from '../../../database/tables';
import { Id } from '../../../shared';
import { Singer } from '../../domain';

export class SingerMapper {
  static toTable(domain: Singer): SingerTable {
    const {
      fullName,
      picture,
      registerDate,
      isSubscribed,
      subscribedDate,
      status,
      audit,
    } = domain.getProps();

    const table = new SingerTable();
    table.id = domain.getId();
    table.fullName = fullName.unpack();
    table.picture = picture.unpack();
    table.registerDate = registerDate.unpack();
    table.isSubscribed = isSubscribed;
    table.subscribedDate = subscribedDate ? subscribedDate.unpack() : null;
    table.status = status;

    const { createdBy, createdAt, updatedBy, updatedAt, timestamp } =
      audit.unpack();

    table.audit = {
      createdBy,
      createdAt,
      updatedBy,
      updatedAt,
      timestamp,
    };

    return table;
  }

  static toDomain(table: SingerTable): Singer {
    const {
      fullName,
      picture,
      registerDate,
      isSubscribed,
      subscribedDate,
      status,
      audit,
    } = table;

    const domain = Singer.load({
      id: table.id,
      fullName,
      picture,
      registerDate,
      isSubscribed,
      subscribedDate,
      status,
      audit: {
        createdBy: audit.createdBy,
        createdDate: audit.createdAt,
        updatedDate: audit.updatedAt,
        updatedBy: audit.updatedBy,
        timestamp: audit.timestamp,
      },
    });

    domain.setId(Id.load(table.id));

    domain.validate();

    domain.setTrackingProps(TrackingProps.setDirty());

    return domain;
  }
}

export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../server/gateway';
import { createSeismologyServiceRoutes } from '../../../src/generated/server/marsd/seismology/v1/service_server';
import { seismologyHandler } from '../../../server/marsd/seismology/v1/handler';

export default createDomainGateway(
  createSeismologyServiceRoutes(seismologyHandler, serverOptions),
);

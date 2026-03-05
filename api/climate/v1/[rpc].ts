export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../server/gateway';
import { createClimateServiceRoutes } from '../../../src/generated/server/marsd/climate/v1/service_server';
import { climateHandler } from '../../../server/marsd/climate/v1/handler';

export default createDomainGateway(
  createClimateServiceRoutes(climateHandler, serverOptions),
);

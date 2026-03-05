import type { UnrestServiceHandler } from '../../../../src/generated/server/marsd/unrest/v1/service_server';

import { listUnrestEvents } from './list-unrest-events';

export const unrestHandler: UnrestServiceHandler = {
  listUnrestEvents,
};

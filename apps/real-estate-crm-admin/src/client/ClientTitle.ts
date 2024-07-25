import { Client as TClient } from "../api/client/Client";

export const CLIENT_TITLE_FIELD = "lastName";

export const ClientTitle = (record: TClient): string => {
  return record.lastName?.toString() || String(record.id);
};

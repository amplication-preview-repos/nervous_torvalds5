import { SortOrder } from "../../util/SortOrder";

export type ClientOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  lastName?: SortOrder;
  phoneNumber?: SortOrder;
  firstName?: SortOrder;
  email?: SortOrder;
};

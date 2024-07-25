import { AppointmentCreateNestedManyWithoutClientsInput } from "./AppointmentCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  lastName?: string | null;
  phoneNumber?: string | null;
  firstName?: string | null;
  email?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutClientsInput;
};

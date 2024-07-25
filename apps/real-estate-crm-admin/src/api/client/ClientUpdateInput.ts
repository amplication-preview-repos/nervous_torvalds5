import { AppointmentUpdateManyWithoutClientsInput } from "./AppointmentUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  lastName?: string | null;
  phoneNumber?: string | null;
  firstName?: string | null;
  email?: string | null;
  appointments?: AppointmentUpdateManyWithoutClientsInput;
};

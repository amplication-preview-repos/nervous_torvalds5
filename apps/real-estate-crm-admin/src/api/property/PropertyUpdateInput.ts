import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  address?: string | null;
  price?: number | null;
  description?: string | null;
  listedDate?: Date | null;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
};

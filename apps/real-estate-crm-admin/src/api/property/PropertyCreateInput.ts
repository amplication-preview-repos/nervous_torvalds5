import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  address?: string | null;
  price?: number | null;
  description?: string | null;
  listedDate?: Date | null;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
};

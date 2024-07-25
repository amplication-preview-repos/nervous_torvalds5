import { Appointment } from "../appointment/Appointment";

export type Client = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  lastName: string | null;
  phoneNumber: string | null;
  firstName: string | null;
  email: string | null;
  appointments?: Array<Appointment>;
};

import { z } from "zod";

export const StudentSchema = z.object({
  name: z.string().min(1, "Name is required").max(255).describe("Student Name"),

  email: z
    .string()
    .email()
    .min(1, "E-mail is required")
    .describe("Student E-mail"),

  birthDate: z.date().describe("Student Birth Date"),

  status: z.enum(["ACTIVATED", "DEACTIVATED"]).describe("Student Status"),

  SchoolId: z.string().describe("Student`s School identifier"),
});

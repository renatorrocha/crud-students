import { z } from "zod";

export const SchoolSchema = z.object({
  name: z.string().min(1, "Name is required").max(255).describe("School Name"),

  email: z
    .string()
    .email()
    .min(1, "E-mail is required")
    .describe("School E-mail"),

  status: z.enum(["ACTIVATED", "DEACTIVATED"]).describe("School Status"),
});

export type SchoolFormData = z.infer<typeof SchoolSchema>;

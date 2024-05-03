import { z } from "zod";

export const issueSchema = z.object({
  title: z.string().min(1, "This field is required").max(255),
  description: z.string().min(1, "This field is required").max(65535),
});

export const patchIssueSchema = z.object({
  title: z.string().min(1, "This field is required").max(255).optional(),
  description: z
    .string()
    .min(1, "This field is required")
    .max(65535)
    .optional(),
  assignedToUserId: z
    .string()
    .min(1, "AssignedToUserId is requered.")
    .max(255)
    .optional()
    .nullable(),
});

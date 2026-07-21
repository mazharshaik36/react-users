import { z } from "zod";

export const userSchema = z.object({
  firstName: z.string().trim().min(2, "First name must be at least 2 characters"),

  lastName: z.string().trim().min(2, "Last name must be at least 2 characters"),

  email: z.string().trim().email("Please enter a valid email"),

  age: z
    .number({
      error: "Age is required",
    })
    .min(18, "Age must be at least 18")
    .max(100, "Age cannot exceed 100"),

  phone: z.string().trim().min(10, "Phone number is too short"),
});

export type UserFormData = z.infer<typeof userSchema>;

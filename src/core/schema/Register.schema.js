import { z } from "zod";


export const registerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  country_code: z.string().min(1, "Country code is required"),
  phone: z.string().min(7, "Phone number is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  acceptTerms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms" }),
  }),
});

 
import {z} from "zod";


export const forgotpassSchema = z.object({
    emailAddress: z.string().email("Invalid email address"),
})
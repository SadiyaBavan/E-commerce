import {z} from "zod"



export const resetpassSchema = z.object({
     newPassword: z.string().min(6, "Password must be at least 6 characters"),
     confirmPassword:z.string().min(6, "must match to newPassword")
})
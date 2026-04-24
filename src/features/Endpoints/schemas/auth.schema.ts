// auth.schema.ts
import { z } from "zod"

export const authSchema = z.object({
  type: z.enum(["authorization", "api_key", "basic"]),
  header_name: z.string().optional(),
  token_prefix: z.string().optional()
}).superRefine((data, ctx) => {

  if (data.type === "authorization") {
    if (!data.header_name) {
      ctx.addIssue({
        code: "custom",
        path: ["header_name"],
        message: "El header es requerido"
      })
    }

    if (!data.token_prefix) {
      ctx.addIssue({
        code: "custom",
        path: ["token_prefix"],
        message: "El prefijo es requerido"
      })
    }
  }

  if (data.type === "api_key") {
    if (!data.header_name) {
      ctx.addIssue({
        code: "custom",
        path: ["header_name"],
        message: "El header es requerido"
      })
    }
  }
})
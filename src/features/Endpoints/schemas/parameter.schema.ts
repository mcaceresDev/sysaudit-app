import { z } from "zod"

export const parameterSchema = z.object({
  name: z.string().min(1, "Nombre requerido"),
  in: z.enum(["query", "path", "header"]),
  type: z.enum(["string", "number", "boolean"]),
  required: z.boolean().optional(),
  description: z.string().optional(),
  endpoint_id: z.number()
})
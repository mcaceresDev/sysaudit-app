import { z } from "zod"

export const bodySchema = z.object({
  type: z.enum(["json", "form-data", "x-www-form-urlencoded"]),
  example: z.any().optional(),
  endpoint_id: z.number()
})
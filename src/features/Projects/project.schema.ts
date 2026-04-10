import { z } from "zod"

export const projectSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  description: z.string().optional(),
  tecnologies: z.string().optional()
})

export type ProjectFormData = z.infer<typeof projectSchema>
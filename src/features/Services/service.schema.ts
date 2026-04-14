import { z } from "zod"

export const serviceSchema = z.object({
  id: z.number().optional(),

  project_id: z
    .number()
    .int({ message: "El project_id debe ser un entero" }),

  name: z
    .string()
    .min(1, { message: "El nombre es requerido" }),

  base_path: z
    .string()
    .min(1, { message: "El base_path es requerido" }),

  protocol_type: z
    .enum(["rest", "soap", "graphql"])
    .nullable()
    .optional(),

  auth_type: z
    .enum(["none", "basic", "bearer", "api_key", "oauth2"])
    .nullable()
    .optional(),
});

export type ServiceFormData = z.infer<typeof serviceSchema>
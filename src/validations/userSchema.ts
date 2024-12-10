import { z } from "zod";

export const idSchema = z.object({ id: z.number() });

export const userUpdateSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const userCreateSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
});

import { z } from "zod";

export const idSchema = z.object({ id: z.string() });
export const nameSchema = z.object({ name: z.string() });

export const clientSchema = z.object({
  id: z.number().int().positive().optional(), // ID opcional para validación en actualizaciones
  name: z.string().min(1, "El nombre es requerido"),
  address: z.string().min(1, "La dirección es requerida"),
  phone: z.string().min(1, "El teléfono es requerido"),
  creditLimit: z.number().refine((value) => parseFloat(value.toFixed(2)), {
    message: "El límite de crédito debe tener hasta 2 decimales",
  }),
  currentBalance: z.number().refine((value) => parseFloat(value.toFixed(2)), {
    message: "El saldo actual debe tener hasta 2 decimales",
  }),
  email: z.string().email("Email inválido"),
  debts: z.array(
    z.object({
      id: z.number().int().positive().optional(),
      amount: z.number().refine((value) => parseFloat(value.toFixed(2)), {
        message: "El monto debe tener hasta 2 decimales",
      }),
      isPaid: z.boolean(),
      clientId: z.number().int().positive().optional(),
      saleId: z.number().int().positive().optional(),
    })
  ).optional(),
});

export type ClientType = z.infer<typeof clientSchema>;

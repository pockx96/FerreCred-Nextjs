import { z } from "zod";

export const idSchema = z.object({ id: z.string() });
export const nameSchema = z.object({ name: z.string() });

export const clientSchema = z.object({
  id: z.number().int().positive().optional(), // ID opcional para validación en actualizaciones
  name: z.string().min(1, "El nombre es requerido"),
  address: z.string().min(1, "La dirección es requerida"),
  phone: z.string().min(1, "El teléfono es requerido"),
  creditLimit: z.number(), // Usando decimalSchema para límite de crédito
  currentBalance: z.number(), // Usando decimalSchema para saldo actual
  email: z.string().email("Email inválido"), // Validación de correo electrónico
  debts: z
    .array(
      z.object({
        id: z.number().int().positive().optional(),
        amount: z.number(),
        isPaid: z.boolean(),
        clientId: z.number().int().positive().optional(),
        saleId: z.number().int().positive().optional(),
      }),
    )
    .optional(), // Optional debts array
});

export type ClientType = z.infer<typeof clientSchema>;

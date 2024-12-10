import { z } from "zod";

export const decimalSchema = z.number().refine(
  (value) => parseFloat(value.toFixed(2)),
  {
    message: "El número debe tener hasta 2 decimales",
  },
);

export const debtSchema = z.object({
  id: z.number().int().positive().optional(),
  amount: decimalSchema,
  isPaid: z.boolean().default(false),
  clientId: z.number().int().positive(),
  saleId: z.number().int().positive().optional(),
});

export type DebtType = z.infer<typeof debtSchema>;

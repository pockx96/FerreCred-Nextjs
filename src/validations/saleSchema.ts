import { z } from "zod";

export const decimalSchema = z
  .number()
  .refine((value) => parseFloat(value.toFixed(2)), {
    message: "El número debe tener hasta 2 decimales",
  });

export const saleSchema = z.object({
  saleId: z.string(),
  date: z.string(),
  total: decimalSchema,
  methodPay: z.string(),
  clientSale: z.number().int().positive(),
  productSale: z.string(),
  saleTicket: z.string(),
});

export type SaleType = z.infer<typeof saleSchema>;

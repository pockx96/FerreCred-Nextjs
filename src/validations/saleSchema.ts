import { z } from "zod";

export const decimalSchema = z
  .number()
  .refine((value) => parseFloat(value.toFixed(2)), {
    message: "El número debe tener hasta 2 decimales",
  });

export const saleSchema = z.object({
  saleId: z.string().min(3, {
    message: "El ID de la venta debe tener al menos más de 3 caracteres",
  }),
  date: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Debe ser una fecha válida",
  }),
  total: decimalSchema,
  methodPay: z.string().min(3, {
    message: "El método de pago debe tener al menos más de 3 caracteres",
  }),
  clientSale: z.number().int().positive({
    message: "Debe ser un número entero positivo",
  }),
  productSale: z.string().min(3, {
    message: "El producto de venta debe tener al menos más de 3 caracteres",
  }),
  saleTicket: z.string().min(3, {
    message: "El ticket de venta debe tener al menos más de 3 caracteres",
  }),
});

export type SaleType = z.infer<typeof saleSchema>;

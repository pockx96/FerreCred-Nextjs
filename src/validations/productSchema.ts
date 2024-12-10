import { z } from "zod";

export const codeSchema = z.object({ ProductId: z.string() });
export const descriptionSchema = z.object({ description: z.string() });

export const updateStockSchema = z.object({
  ProductId: z.string(),
  newStock: z.number(),
});

export const productSchema = z.object({
  ProductId: z.string().min(3, {
    message: "Debe tener al menos más de 3 caracteres",
  }),
  description: z.string().min(3, {
    message: "Debe tener al menos más de 3 caracteres",
  }),
  stock: z.string().refine((stock) => !isNaN(parseInt(stock)), {
    message: "Debe ser un valor numérico",
  }),
  priceSale: z.string().refine((priceSale) => !isNaN(parseFloat(priceSale)), {
    message: "Debe ser un valor numérico",
  }),
  priceBuy: z.string().refine((priceBuy) => !isNaN(parseFloat(priceBuy)), {
    message: "Debe ser un valor numérico",
  }),
  weight: z.string().refine((weight) => !isNaN(parseFloat(weight)), {
    message: "Debe ser un valor numérico",
  }),
  unit: z.string(),
});

export type ProductType = z.infer<typeof productSchema>;

import { z } from "zod";

export const codeSchema = z.object({ ProductId: z.string() });
export const descriptionSchema = z.object({ description: z.string() });

export const updateStockSchema = z.object({
  ProductId: z.string(),
  newStock: z.number(),
});

export const productSchema = z.object({
  ProductId: z.string(),
  description: z.string(),
  stock: z.number(),
  priceSale: z.number(),
  priceBuy: z.number(),
  weight: z.number(),
  unit: z.string(),
});

export type ProductType = z.infer<typeof productSchema>;

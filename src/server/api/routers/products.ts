import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const codeSchema = z.object({ ProductId: z.string() });
const descriptionSchema = z.object({ description: z.string() });

const updateStockSchema = z.object({
  ProductId: z.string(),
  newStock: z.number(),
});

export const productSchema = z.object({
  ProductId: z.string(),
  description: z.string(),
  stock: z.number(),
  price: z.number(),
  weight: z.number(),
});

export type ProductType = z.infer<typeof productSchema>;

export const productRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.product.findMany();
  }),

  getOne: publicProcedure.input(codeSchema).query(({ input, ctx }) => {
    return ctx.db.product.findUnique({
      where: {
        ProductId: input.ProductId,
      },
    });
  }),

  getMany: publicProcedure.input(descriptionSchema).query(({ input, ctx }) => {
    return ctx.db.product.findMany({
      where: {
        description: input.description,
      },
    });
  }),

  update: publicProcedure.input(updateStockSchema).mutation(async ({ input, ctx }) => {
    const { ProductId, newStock } = input;
    return await ctx.db.product.update({
      where: { ProductId },
      data: { stock: newStock },
    });
  }),
});

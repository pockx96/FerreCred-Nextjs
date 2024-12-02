import { TRPCError } from "@trpc/server";
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
  priceSale: z.number(),
  priceBuy:  z.number(),
  weight: z.number(),
  unit: z.string()
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

  createProduct: publicProcedure
  .input(productSchema)
  .mutation(async ({ ctx, input }) => {
    // simulate a slow db call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const exists = await ctx.db.product.findUnique({
      where: input 
    });

    if (exists) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "El valor ingresado ya existe.",
      });
    }
    return ctx.db.product.create({
      data: input
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

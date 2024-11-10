import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const codeSchema = z.object({ code: z.string() });
const descriptionSchema = z.object({ description: z.string() });

export const productSchema = z.object({
  code: z.string(),
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
        code: input.code,
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

  // Nueva mutación para actualizar el stock del producto
  updateStock: publicProcedure
    .input(z.object({
      code: z.string(),
      quantity: z.number()
    }))
    .mutation(async ({ input, ctx }) => {
      const { code, quantity } = input;
      // Encuentra el producto por el código
      const product = await ctx.db.product.findUnique({
        where: { code }
      });

      if (!product) {
        throw new Error("Producto no encontrado");
      }
      // Actualiza el stock restando la cantidad vendida
      return await ctx.db.product.update({
        where: { code },
        data: {
          stock: product.stock - quantity,
        },
      });
    }),
});

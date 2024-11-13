import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const decimalSchema = z
  .number()
  .refine((value) => parseFloat(value.toFixed(2)), {
    message: "El número debe tener hasta 2 decimales",
  });

const saleSchema = z.object({
  id: z.number().int().positive().optional(),
  date: z.date().optional(),
  total: decimalSchema,
  methodPay: z.string(),
  client: z.number().int().positive(),
  products: z
    .array(
      z.object({
        code: z.string(),
        description: z.string(),
        stock: z.number().int(),
        price: z.number(),
        weight: z.number(),
      }),
    )
    .optional(),
});

export type SaleType = z.infer<typeof saleSchema>;

export const saleRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.sale.findMany();
  }),

  getOne: publicProcedure
    .input(z.object({ id: z.number().int() }))
    .query(({ input, ctx }) => {
      return ctx.db.sale.findUnique({
        where: {
          id: input.id,
        },
      });
    }),

  create: publicProcedure.input(saleSchema).mutation(({ input, ctx }) => {
    return ctx.db.sale.create({
      data: {
        date: input.date || new Date(),
        total: input.total,
        methodPay: input.methodPay,
        client: input.client,
        products: {
          create:
            input.products?.map((product) => ({
              code: product.code,
              description: product.description,
              stock: product.stock,
              price: product.price,
              weight: product.weight,
            })) || [],
        },
      },
    });
  }),

  update: publicProcedure.input(saleSchema).mutation(({ input, ctx }) => {
    return ctx.db.sale.update({
      where: {
        id: input.id,
      },
      data: {
        totalAmount: input.totalAmount,
        isCredit: input.isCredit,
        clientId: input.clientId,
        date: input.date || new Date(),
      },
    });
  }),

  delete: publicProcedure
    .input(z.object({ id: z.number().int() }))
    .mutation(({ input, ctx }) => {
      return ctx.db.sale.delete({
        where: {
          id: input.id,
        },
      });
    }),
});

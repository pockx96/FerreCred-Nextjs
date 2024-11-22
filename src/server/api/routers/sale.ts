import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { ClientType } from "./client";

const decimalSchema = z
  .number()
  .refine((value) => parseFloat(value.toFixed(2)), {
    message: "El número debe tener hasta 2 decimales",
  });

const saleSchema = z.object({
  saleId: z.string(),
  date: z.string(),
  total: decimalSchema,
  methodPay: z.string(),
  clientSale: z.number().int().positive(),
  productSale: z.string(),
  saleTicket: z.string(),
});

export type SaleType = z.infer<typeof saleSchema>;

export const saleRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.sale.findMany();
  }),

  getOne: publicProcedure
    .input(z.object({ SaleId: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.db.sale.findUnique({
        where: {
          SaleId: input.SaleId,
        },
      });
    }),

  create: publicProcedure.input(saleSchema).mutation(({ ctx, input }) => {
    return ctx.db.sale.create({
      data: {
        SaleId: input.saleId,
        date: input.date,
        total: input.total,
        methodPay: input.methodPay,
        clientSale: input.clientSale,
        productSale: input.productSale,
        saleTicket: input.saleTicket,
      },
    });
  }),

  update: publicProcedure.input(saleSchema).mutation(({ input, ctx }) => {
    return ctx.db.sale.update({
      where: {
        SaleId: input.saleId,
      },
      data: {
        total: input.total,
        methodPay: input.methodPay,
        date: input.date,
      },
    });
  }),

  delete: publicProcedure
    .input(z.object({ SaleId: z.string() }))
    .mutation(({ input, ctx }) => {
      return ctx.db.sale.delete({
        where: {
          SaleId: input.SaleId,
        },
      });
    }),
});

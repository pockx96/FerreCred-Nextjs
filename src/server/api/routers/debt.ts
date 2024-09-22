import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const decimalSchema = z.number().refine(
  (value) => parseFloat(value.toFixed(2)),
  {
    message: "El número debe tener hasta 2 decimales",
  },
);

const debtSchema = z.object({
  id: z.number().int().positive().optional(),
  amount: decimalSchema,
  isPaid: z.boolean().default(false),
  clientId: z.number().int().positive(),
  saleId: z.number().int().positive().optional(),
});

export type DebtType = z.infer<typeof debtSchema>;

export const debtRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.debt.findMany();
  }),

  getOne: publicProcedure.input(z.object({ id: z.number().int() })).query(({ input, ctx }) => {
    return ctx.db.debt.findUnique({
      where: {
        id: input.id,
      },
    });
  }),

  create: publicProcedure.input(debtSchema).mutation(({ input, ctx }) => {
    return ctx.db.debt.create({
      data: {
        amount: input.amount,
        isPaid: input.isPaid,
        clientId: input.clientId,
        saleId: input.saleId,
      },
    });
  }),

  update: publicProcedure.input(debtSchema).mutation(({ input, ctx }) => {
    return ctx.db.debt.update({
      where: {
        id: input.id,
      },
      data: {
        amount: input.amount,
        isPaid: input.isPaid,
        clientId: input.clientId,
        saleId: input.saleId,
      },
    });
  }),

  delete: publicProcedure.input(z.object({ id: z.number().int() })).mutation(({ input, ctx }) => {
    return ctx.db.debt.delete({
      where: {
        id: input.id,
      },
    });
  }),

  getByClientId: publicProcedure.input(z.object({ clientId: z.number().int() })).query(({ input, ctx }) => {
    return ctx.db.debt.findMany({
      where: {
        clientId: input.clientId,
        isPaid: false,
      },
    });
  }),
});

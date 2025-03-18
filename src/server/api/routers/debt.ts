import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { debtSchema, decimalSchema } from "../../../validations/debtSchema";
import { z } from "zod";

export const debtRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.debt.findMany();
  }),

  getByClientId: publicProcedure
    .input(z.object({ clientId: z.number().int() }))
    .query(({ input, ctx }) => {
      return ctx.db.debt.findMany({
        where: {
          clientId: input.clientId,
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
        DebtId: input.id,
      },
      data: {
        amount: input.amount,
        isPaid: input.isPaid,
        clientId: input.clientId,
        saleId: input.saleId,
      },
    });
  }),

  delete: publicProcedure
    .input(z.object({ id: z.number().int() }))
    .mutation(({ input, ctx }) => {
      return ctx.db.debt.delete({
        where: {
          DebtId: input.id,
        },
      });
    }),
});

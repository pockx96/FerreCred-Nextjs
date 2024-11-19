import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const idSchema = z.object({ id: z.number() });

export type CashType = z.infer<typeof CashCloseSchema>;

const CashCloseSchema = z.object({
  CashRegisterCloseid: z.number(),
  user: z.string(),
  efective: z.number(),
  dollar: z.number(),
  credit: z.number(),
  debit: z.number(),
  date: z.string(),
});

export const cashRegisterCloseRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.cashRegisterClose.findMany({
      orderBy: {
        CashRegisterCloseid: "desc", // Ordena de mayor a menor
      },
    });
  }),

  getOne: publicProcedure.input(idSchema).query(({ input, ctx }) => {
    return ctx.db.cashRegisterClose.findUnique({
      where: {
        CashRegisterCloseid: input.id,
      },
    });
  }),

  update: publicProcedure.input(CashCloseSchema).mutation(({ input, ctx }) => {
    return ctx.db.cashRegisterClose.update({
      where: {
        CashRegisterCloseid: input.CashRegisterCloseid,
      },
      data: CashCloseSchema.parse(input),
    });
  }),

  createCashRegister: publicProcedure
    .input(CashCloseSchema)
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.cashRegisterClose.create({
        data: {
          user: input.user,
          efective: input.efective,
          dollar: input.dollar,
          credit: input.credit,
          debit: input.debit,
          date: input.date,
        },
      });
    }),
});

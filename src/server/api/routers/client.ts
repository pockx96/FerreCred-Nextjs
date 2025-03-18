import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  idSchema,
  nameSchema,
  clientSchema,
} from "../../../validations/clientSchema";

export const clientRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.client.findMany();
  }),

  getOne: publicProcedure.input(idSchema).query(({ input, ctx }) => {
    return ctx.db.product.findUnique({
      where: {
        ProductId: input.id,
      },
    });
  }),

  getMany: publicProcedure.input(nameSchema).query(({ input, ctx }) => {
    return ctx.db.client.findMany({
      where: {
        name: input.name,
      },
    });
  }),
});

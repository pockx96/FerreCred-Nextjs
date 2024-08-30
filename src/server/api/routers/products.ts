import { Weight } from "lucide-react";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";



const codeSchema = z.object({ code: z.string() });

const productUpdateSchema = z.object({
  code: z.string(),
  description: z.string(),
  stock: z.number(),
  price: z.number(),
  weight: z.number(),
});


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
  })
});
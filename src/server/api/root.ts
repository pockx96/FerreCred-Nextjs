import { postRouter } from "~/server/api/routers/post"
import { userRouter} from "~/server/api/routers/user"
import { productRouter} from "~/server/api/routers/products"
import { clientRouter} from "~/server/api/routers/client"
import { saleRouter} from "~/server/api/routers/sale"
import { debtRouter} from "~/server/api/routers/debt"
import { taskRouter } from "./routers/task";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
  post: postRouter,
  task: taskRouter,
  product: productRouter,
  client: clientRouter,
  sale: saleRouter,
  debt: debtRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);

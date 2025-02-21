import { initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { prisma } from "../../database/prismaDatabase";
import { userRouter } from "./userRouter";

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({ req, res, db: prisma });
type Context = Awaited<ReturnType<typeof createContext>>;
export const t = initTRPC.context<Context>().create();

const appRouter = t.router({
  user: userRouter,
});

export const trpcExpressRouter = trpcExpress.createExpressMiddleware({
  router: appRouter,
  createContext,
});

export type AppRouter = typeof appRouter;

import { initTRPC } from "@trpc/server";
import { z } from "zod";
export const t = initTRPC.create();
export const appRouter = t.router({
  getUser: t.procedure.input(z.string()).query((opts) => {
    opts.input; // string
    return { id: opts.input, name: "Bilbo" };
  }),
  createUser: t.procedure
    .input(z.object({ name: z.string().min(5) }))
    .mutation(async () => {
      return true;
    }),
});
// export type definition of API
export type AppRouterNew = typeof appRouter;

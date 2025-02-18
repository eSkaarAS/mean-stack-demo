import { initTRPC } from "@trpc/server";
import { z } from "zod";
import { prisma } from "./database/prismaDatabase";

export const t = initTRPC.create();
export const appRouter = t.router({
  getUser: t.procedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      const { text } = input;
      return { input: text, name: "Bilbo" };
    }),
  createUser: t.procedure
    .input(z.object({ name: z.string().min(5) }))
    .mutation(async ({ input }) => {
      const { name } = input;
      return await prisma.users.create({
        data: {
          firstName: name,
          lastName: "Baggins",
          Message: {
            create: {
              content: "Hello, world!",
            },
          },
        },
      });
    }),
});

export type AppRouter = typeof appRouter;

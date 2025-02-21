import { z } from "zod";
import { t } from "./trpc.routes";

export const userRouter = t.router({
  getUsers: t.procedure.query(async ({ ctx }) => {
    const users = await ctx.db.users.findMany();
    return users;
  }),

  getUser: t.procedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      const { text } = input;
      return { input: text, name: "Bilbo" };
    }),

  createUser: t.procedure.mutation(async ({ ctx }) => {
    return await ctx.db.users.create({
      data: {
        firstName: "Erik",
        lastName: "Baggins",
      },
    });
  }),
});

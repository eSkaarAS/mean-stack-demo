import { initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import cors from "cors";
import express from "express";
import { startMongooseDatabase } from "./database/mongooseDatabase";
import { startPrismaDatabase } from "./database/prismaDatabase";
import { employeeRouter } from "./routes/employees/employee.routes";
import { appRouter } from "./trpcServer";

startMongooseDatabase();
startPrismaDatabase();

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({ ctx: { req, res } }); // no context
type Context = Awaited<ReturnType<typeof createContext>>;
const t = initTRPC.context<Context>().create();

const app = express();
app.use(cors());
app.use("/employees", employeeRouter);
app.use("/chat", employeeRouter);

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,

    createContext,
  })
);

app.listen(5200, () => {
  console.log(`Server running at http://localhost:5200...`);
});

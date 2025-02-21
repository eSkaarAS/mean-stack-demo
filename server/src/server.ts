import { initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import cors from "cors";
import express from "express";
import { startMongooseDatabase } from "./database/mongooseDatabase";
import { prisma, startPrismaDatabase } from "./database/prismaDatabase";
import { employeeRouter } from "./routes/employees/employee.routes";
import { appRouter } from "./routes/trpcRouters/appRouter";

startMongooseDatabase();
startPrismaDatabase();

// created for each request
const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({ req, res, db: prisma }); // no context
type Context = Awaited<ReturnType<typeof createContext>>;
initTRPC.context<Context>().create();

const app = express();
app.use(cors());
app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.use("/employees", employeeRouter);
app.use("/chat", employeeRouter);

app.listen(5200, () => {
  console.log(`Server running at http://localhost:5200...`);
});

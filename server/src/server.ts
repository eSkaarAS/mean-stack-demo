import cors from "cors";
import express from "express";
import { startMongooseDatabase } from "./database/mongooseDatabase";
import { startPrismaDatabase } from "./database/prismaDatabase";
import { employeeRouter } from "./routes/employees/employee.routes";
import { trpcExpressRouter } from "./routes/trpcRouters/trpc.routes";

startMongooseDatabase();
startPrismaDatabase();

const app = express();
app.use(cors());
app.use("/employees", employeeRouter);
app.use("/chat", employeeRouter);

app.use("/api/trpc", trpcExpressRouter);

app.listen(5200, () => {
  console.log(`Server running at http://localhost:5200...`);
});

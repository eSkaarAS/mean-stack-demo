import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { connectToDatabase } from "./database";
import { employeeRouter } from "./routes/employees/employee.routes";
import mongoose from "mongoose";
import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()
// Load environment variables from the .env file, where the ATLAS_URI is configured
dotenv.config();

const { ATLAS_URI } = process.env;

if (!ATLAS_URI) {
  console.error(
    "No ATLAS_URI environment variable has been defined in config.env"
  );
  process.exit(1);
}

mongoose.connect(ATLAS_URI, {
  dbName: "meanStackExample",
})
  .then(() => console.log('Connected!'));



connectToDatabase(ATLAS_URI)
  .catch((error) => console.error(error));

const app = express();
app.use(cors());
app.use("/employees", employeeRouter);

app.listen(5200, () => {
  console.log(`Server running at http://localhost:5200...`);
});





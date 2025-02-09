import * as express from "express";
import { getEmployee, getEmployeeById, createEmployee, updateEmployee, deleteEmployee } from "./employeeController";

export const employeeRouter = express.Router();
employeeRouter.use(express.json());

employeeRouter.get("/", getEmployee);
employeeRouter.get("/:id", getEmployeeById);
employeeRouter.post("/", createEmployee);
employeeRouter.put("/:id", updateEmployee);
employeeRouter.delete("/:id", deleteEmployee);

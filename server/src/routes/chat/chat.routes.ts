import * as express from "express";
import chatController from "./chatController";

export const chatRouter = express.Router();
chatRouter.use(express.json());

chatRouter.get("/", chatController.getMessages);

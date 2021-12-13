import express from "express";
import { see, logout, edit, remove } from "../controller/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/:id(\\d+)", see);
userRouter.get("/:id(\\d+)/edit", edit);
userRouter.get("/:id(\\d+)/remove", remove);

export default userRouter;
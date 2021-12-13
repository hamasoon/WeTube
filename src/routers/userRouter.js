import express from "express";
import { see, logout, edit, remove } from "../controller/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/:id", see);
userRouter.get("/:id/edit", edit);
userRouter.get("/:id/remove", remove);

export default userRouter;
import express from "express";
import { recommending } from "../controller/videoController";
import { login, join } from "../controller/userController";

const globalRouter = express.Router();

globalRouter.get("/", recommending);
globalRouter.get("/login", login);
globalRouter.get("/join", join);

export default globalRouter;
import express from "express";
import { recommending, search } from "../controller/videoController";
import { login, join } from "../controller/userController";

const globalRouter = express.Router();

globalRouter.get("/", recommending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;
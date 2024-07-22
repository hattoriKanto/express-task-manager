import express from "express";
import { root } from "../controllers/root.controller";

export const rootRouter = express.Router();

rootRouter.get("/", root);

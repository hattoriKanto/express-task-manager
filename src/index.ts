import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import { PrismaClient } from "@prisma/client";

import { rootRouter } from "./routes/root.route";
import { taskRouter } from "./routes/task.route";
import * as Middlwares from "./middlwares/middlwares";

dotenv.config();

export const app = express();
export const prisma = new PrismaClient();
const port = process.env.PORT || 3000;
export const server_url = process.env.SERVER_URL;

app.use(cors());
app.use(express.json());
app.use(rootRouter);
app.use(taskRouter);
app.use(Middlwares.notFoundHandler);
app.use(Middlwares.serverErrorHandler);

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});

import cors from "cors";
import express from "express";
import logger from "morgan";

import { db } from "./db";
import addRoutes from "./routes";

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger("tiny"));
app.use(express.json());
addRoutes(app);
app.use((_, res) => res.sendStatus(404));

async function initialize(): Promise<void> {
  // Sync all created models
  await db.sync();

  app.listen(PORT, () => {
    /* eslint-disable-next-line no-console */
    console.log(`Listening on ${PORT}`);
  });
}

initialize();

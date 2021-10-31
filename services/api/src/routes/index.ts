import { Express } from "express";

import logsRouter from "./logs";
import monitorsRouter from "./monitors";

export default function addRoutes(app: Express): Express {
  app.use("/logs", logsRouter);
  app.use("/monitors", monitorsRouter);
  return app;
}

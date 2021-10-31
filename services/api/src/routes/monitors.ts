import { Router } from "express";
import { v4 as uuid } from "uuid";

import * as db from "../db";
import * as tasks from "../tasks";

const router = Router();

/** Adds routes to Express app.
 * NB: Is inplace */
router.get("/", async (_, res) => {
  const monitors = await db.models.Monitor.findAll();
  res.send(JSON.stringify(monitors));
});

router.delete("/:monitorId", async (req, res) => {
  const monitorId = req.params.monitorId;
  try {
    tasks.removeMonitor(monitorId);
    const newMonitor = await db.models.Monitor.destroy({
      where: { id: monitorId },
    });
    res.send(JSON.stringify(newMonitor));
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send(JSON.stringify({ message: error.message }));
    }
  }
});

router.post("/", async (req, res) => {
  const owner = req.headers["x-user-id"];
  const data = { ...req.body, id: uuid(), owner };
  try {
    const newMonitor = await db.models.Monitor.create(data);
    tasks.addMonitor(newMonitor.get());
    res.status(201).send(JSON.stringify(newMonitor));
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send(JSON.stringify({ message: error.message }));
    }
  }
});

export default router;

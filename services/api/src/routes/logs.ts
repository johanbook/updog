import { Router } from "express";

import * as db from "../db";

const router = Router();

/** Adds routes to Express app.
 * NB: Is inplace */
router.get("/:monitorId", async (req, res) => {
  const logs = await db.models.Log.findAll({
    where: { monitorId: req.params.monitorId },
  });
  res.send(JSON.stringify(logs));
});

export default router;

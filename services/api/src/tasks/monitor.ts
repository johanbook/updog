import fetch from "node-fetch";
import { v4 as uuid } from "uuid";

import * as db from "../db";
import * as types from "../types";
import * as task from "./task";

async function monitorProcess(monitor: types.Monitor): Promise<void> {
  try {
    const resp = await fetch(monitor.url);
    db.models.Log.create({
      id: uuid(),
      httpStatusCode: resp.status,
      monitorId: monitor.id,
    });
  } catch {
    db.models.Log.create({
      id: uuid(),
      httpStatusCode: -1,
      monitorId: monitor.id,
    });
  }
}

export function addMonitor(monitor: types.Monitor): void {
  if (!task.exists(monitor.id)) {
    task.create(monitorProcess, { args: monitor, id: monitor.id });
  }
}

export function removeMonitor(monitorId: string): void {
  if (task.exists(monitorId)) {
    task.remove(monitorId);
  }
}

export async function syncMonitors(): Promise<void> {
  const monitors = await db.models.Monitor.findAll();
  for (const monitor of monitors) {
    addMonitor(monitor.get());
  }
}

task.create(syncMonitors, { args: undefined, id: "syncMonitors" });

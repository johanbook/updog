import * as types from "../types";

const API_URL = "http://api.example.com";

export async function getMonitors(): Promise<types.Monitor[]> {
  const resp = await fetch(API_URL + "/monitors");
  return await resp.json();
}

export async function createMonitor(
  monitor: Omit<types.Monitor, "id">
): Promise<types.Monitor[]> {
  const resp = await fetch(API_URL + "/monitors", {
    body: JSON.stringify(monitor),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  return await resp.json();
}

export async function deleteMonitor(monitorId: string): Promise<void> {
  const resp = await fetch(API_URL + `/monitors/${monitorId}`, {
    method: "DELETE",
  });
  return await resp.json();
}

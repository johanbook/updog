import * as types from "../types";

const API_URL = "http://api.example.com";

export async function getLogs(monitorId: string): Promise<types.Log[]> {
  const resp = await fetch(API_URL + `/logs/${monitorId}`);
  return await resp.json();
}

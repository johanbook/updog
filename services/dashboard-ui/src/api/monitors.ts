import * as types from "../types";

const API_URL = "http://api.example.com";

export async function getMonitors(): Promise<types.Monitor[]> {
  const resp = await fetch(API_URL + "/monitors");
  return await resp.json();
}

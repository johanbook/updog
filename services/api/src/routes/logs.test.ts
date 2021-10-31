import express, { Express } from "express";
import request from "supertest";

import { db } from "../db";
import addRoutes from ".";

jest.mock("../db/db", () => {
  const Sequelize = jest.requireActual("sequelize");
  return new Sequelize("sqlite::memory", { logging: false });
});

let app: Express;

beforeEach(async () => {
  app = express();
  app.use(express.json());
  addRoutes(app);
  await db.sync();
});

describe("/logs", () => {
  test("GET", async () => {
    const resp = await request(app).get("/logs/my-monitor-id").expect(200);
    expect(resp.text).toBe("[]");
  });
});

import express, { Express } from "express";
import request from "supertest";

import { db } from "../db";
import { fixtures } from "../test";
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

describe("/monitors", () => {
  describe("GET", () => {
    it("returns data", async () => {
      const resp = await request(app).get("/monitors").expect(200);
      expect(resp.text).toBe("[]");
    });
  });

  describe("DELETE", () => {
    it("it can delete entry", async () => {
      await request(app)
        .delete("/monitors/my-monitor")
        .set("x-user-id", "my-user-id")
        .send(fixtures.MONITOR)
        .expect(200);
    });

    it("it fails on missing fields", async () => {
      await request(app).delete("/monitors/my-monitor").expect(200);
    });
  });

  describe("POST", () => {
    it("it can create entry", async () => {
      await request(app)
        .post("/monitors")
        .set("x-user-id", "my-user-id")
        .send(fixtures.MONITOR)
        .expect(201);
    });

    it("it fails on missing fields", async () => {
      await request(app).post("/monitors").expect(400);
    });
  });
});

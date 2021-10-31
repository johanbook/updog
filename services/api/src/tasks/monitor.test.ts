import * as fixtures from "../../../admin-ui/src/test/fixtures";
import * as monitor from "./monitor";

jest.mock("../db/db", () => {
  const Sequelize = jest.requireActual("sequelize");
  return new Sequelize("sqlite::memory", { logging: false });
});

test("can add and remove task", () => {
  monitor.addMonitor(fixtures.MONITOR);
  monitor.removeMonitor(fixtures.MONITOR.id);
});

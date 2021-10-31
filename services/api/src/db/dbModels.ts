import { DataTypes, Model, Optional } from "sequelize";

import * as types from "../types";
import sequelize from "./db";

type CreateLog = Optional<types.Log, "id">;
type CreateMonitor = Optional<types.Monitor, "id">;

export const Log = sequelize.define<Model<types.Log, CreateLog>>("Log", {
  id: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
  monitorId: { type: DataTypes.STRING, allowNull: false },
  httpStatusCode: { type: DataTypes.INTEGER, allowNull: false },
});

export const Monitor = sequelize.define<Model<types.Monitor, CreateMonitor>>(
  "Monitor",
  {
    id: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    url: { type: DataTypes.STRING, allowNull: false },
  }
);

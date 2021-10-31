import { Sequelize } from "sequelize";

const DATABASE_URI = process.env.DATABASE_URI;

if (!DATABASE_URI) {
  throw new Error(`DATABASE_URI is not defined`);
}

const sequelize = new Sequelize(DATABASE_URI, { logging: false });

/** Checks that database connection was properly established */
async function verifyDbConnection(sequelize: Sequelize): Promise<void> {
  try {
    await sequelize.authenticate();
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
}
verifyDbConnection(sequelize);

export default sequelize;

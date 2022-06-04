import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  DB_NAME || "database",
  DB_USERNAME || "root",
  DB_PASSWORD || "",
  {
    host: DB_HOST || "localhost",
    dialect: "mysql" /* one of  | 'mariadb' | 'postgres' | 'mssql' */,
  }
);

export default sequelize

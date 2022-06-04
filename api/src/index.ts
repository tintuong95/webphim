import express, { Application, Response, Request } from "express";
import cors from "cors";
import helmet from "helmet";
import path from "path";

import dotenv from "dotenv";
import sequelize from "./config/db/db";
import { graphqlHTTP } from "express-graphql";
import schema from "./config/schema";
import Authentication from "./utils/authentication";

import "./config/db/assocs"

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.plugins();
    this.connectDB();
    this.GraphQL();
  }

  protected plugins() {
    this.app.use(cors());
    this.app.use(
      helmet({
        contentSecurityPolicy:
          process.env.NODE_ENV === "production" ? undefined : false,
      })
    );
    this.app.use(express.json());
    this.app.use(express.static(path.join(__dirname, "public")));
    dotenv.config();
  }

  protected async connectDB() {
    await sequelize.sync({ alter: true });
  }

  protected GraphQL() {
    this.app.use(
      "/graphql",
      graphqlHTTP(async request => ({
        schema,
        graphiql: true,
        context:{
            auth:Authentication.decodeToken(request.headers.authorization||"token"),
            
        }
       }))
    );
  }
}

const app = new App().app;

app.listen(5000, () => {
  console.log("success");
});

import express, { Application, Response, Request, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import dotenv from "dotenv";
import multer from "multer";

import sequelize from "./config/db/db";
import { graphqlHTTP } from "express-graphql";
import schema from "./config/schema";
import Authentication from "./utils/authentication";
import "./config/db/assocs";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.plugins();
    this.connectDB();
    this.GraphQL();
    this.Upload();
  }

  protected plugins() {
    this.app.use(function (req: Request, res: Response, next: NextFunction) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
    });
    this.app.use(
      helmet({
        contentSecurityPolicy: false,
      })
    );
    this.app.use(
      cors({
        origin: "*",
        optionsSuccessStatus: 200,
      })
    );
    this.app.use(express.json({ limit: "50mb" }));
    this.app.use(express.static(path.join(__dirname, "../public")));

    dotenv.config();
  }

  protected async connectDB() {
    await sequelize.sync({ alter: true });
  }

  protected GraphQL() {
    this.app.use(
      "/graphql",
      graphqlHTTP(async (request) => ({
        schema,
        graphiql: true,
        context: {
          auth: Authentication.decodeToken(
            request.headers.authorization || "token"
          ),
        },
      }))
    );
  }

  protected Upload() {
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/img"));
      },
      filename: function (req, file, cb) {
        cb(null, file.originalname);
      },
    });

    const upload = multer({ storage });
    this.app.post(
      "/upload",
      upload.any(),
      function (req: Request, res: Response) {
        res.json({ data: "success" });
      }
    );
  }
}

const app = new App().app;

app.listen(5000, () => {
  console.log("success");
});

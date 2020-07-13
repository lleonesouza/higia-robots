import express from "express";
import makeRoutes from "./routes/index";

const makeServer = () => {
  const app = express();
  app.disable("x-powered-by");
  app.use(express.json());

  const router = express.Router();
  const routes = makeRoutes(router);
  app.use("/api", routes);

  return app;
};

export default makeServer;

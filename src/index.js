import path from "path";
import fs from "fs";
import express from "express";

const RESOURCES_BASE_ROUTE = process.env["RESOURCES_BASE_ROUTE"];
const RESOURCES_INTERNAL_PORT = process.env["RESOURCES_INTERNAL_PORT"];

const app = express();

app.use(
  RESOURCES_BASE_ROUTE + "/jquery",
  express.static("/app/node_modules/jquery/dist")
);
app.use(
  RESOURCES_BASE_ROUTE + "/bootstrap",
  express.static("/app/node_modules/bootstrap/dist")
);
app.use(
  RESOURCES_BASE_ROUTE + "/font-awesome",
  express.static("/app/node_modules/font-awesome")
);

app.listen(RESOURCES_INTERNAL_PORT, () => {
  console.log(`Server is listening on port.. ${RESOURCES_INTERNAL_PORT}`);
});

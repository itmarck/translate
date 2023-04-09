import express from "express";
import server from "vite-express";
import { envs } from "../shared/environment.js";

import api from "./api/index.js";

const { port } = envs();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", api);

server.listen(app, port);

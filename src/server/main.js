import express from "express";
import server from "vite-express";
import { envs } from "../shared/environment.js";

const { port } = envs();

const app = express();

server.listen(app, port);

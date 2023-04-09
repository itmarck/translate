import express from "express";
import server from "vite-express";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.TRANSLATE_PORT;
const app = express();

server.listen(app, port);

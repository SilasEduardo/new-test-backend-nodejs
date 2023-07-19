import "../module-alias";
import "reflect-metadata";
import express from "express";
import "@shared/container";

import { router } from "./routers";



const app = express();
app.use(express.json());
app.use(router);

export { app };

import express, {Request, Response, NextFunction } from "express";
import router from "./routes";

const app = express();
app.use(express.json());

app.use(router)

app.listen(3333, () => console.log("Servidor online na porta 3333, http://localhost:3333"));

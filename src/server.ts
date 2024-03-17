import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";

import router from "./routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message,
    });
  }

  return res.status(400).json({
    status: "error",
    message: "Internal server error.",
  });
});

app.listen(PORT, () =>
  console.log(`Servidor online na porta ${PORT}, http://localhost:${PORT}`)
);

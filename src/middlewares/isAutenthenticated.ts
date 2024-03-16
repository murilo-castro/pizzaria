import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface payload {
  sub: string;
}

const isAutenticated = (req: Request, res: Response, next: NextFunction) => {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }

  const jwtSecret = process.env.JWT_SECRET as string
  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, jwtSecret) as payload

    req.user_id = sub;

    return next();
  } catch (error) {
    return res.status(401).end();
  }
}

export { isAutenticated };

import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController"
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAutenticated } from "./middlewares/isAutenthenticated";

const router = Router();

router.post("/user/register", new CreateUserController().handle);
router.post("/user/auth", new AuthUserController().handle);

router.use(isAutenticated);

router.get("/user/me", new DetailUserController().handle);

export default router;

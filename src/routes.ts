import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAutenticated } from "./middlewares/isAutenthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { GetCategoryController } from "./controllers/category/GetCategoryController";

const router = Router();

router.post("/user", new CreateUserController().handle);
router.post("/login", new AuthUserController().handle);

router.use(isAutenticated);

router.get("/user/me", new DetailUserController().handle);

router.get("/category", new GetCategoryController().handle);
router.post("/category", new CreateCategoryController().handle);

export default router;

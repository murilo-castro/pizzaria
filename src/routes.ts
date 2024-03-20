import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAutenticated } from "./middlewares/isAutenthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { GetCategoryController } from "./controllers/category/GetCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";

import uploadConfig from "./config/multer";

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

router.post("/user", new CreateUserController().handle);
router.post("/login", new AuthUserController().handle);

router.use(isAutenticated);

router.get("/user/me", new DetailUserController().handle);

router.get("/category", new GetCategoryController().handle);
router.post("/category", new CreateCategoryController().handle);

router.post(
  "/product",
  upload.single("file"),
  new CreateProductController().handle
);

export default router;

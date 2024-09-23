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
import { ListByCategoryController } from "./controllers/product/ListByCatogoryController";
import { CreateOderController } from "./controllers/order/OrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemConctroller } from "./controllers/items/AddItemConctroller";
import { RemoveItemController } from "./controllers/items/RemoveItemController";
import { SendOrderControler } from "./controllers/order/SendOrderControler";
import { ListOrderController } from "./controllers/order/ListOrderController";

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
router.get("/category/product", new ListByCategoryController().handle);

router.post("/order", new CreateOderController().handle);
router.delete("/order", new RemoveOrderController().handle);
router.put("/order/send", new SendOrderControler().handle);
router.get("/orders", new ListOrderController().handle);

router.post("/order/item", new AddItemConctroller().handle);
router.delete("/order/item", new RemoveItemController().handle);

export default router;

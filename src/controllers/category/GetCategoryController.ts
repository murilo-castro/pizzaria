import { Request, Response } from "express";
import { GetCategoryService } from "../../services/category/GetCategoryService";

class GetCategoryController {
  async handle(req: Request, res: Response) {
    const getCategoryService = new GetCategoryService();
    const categories = await getCategoryService.execute();

    return res.json(categories);
  }
}

export { GetCategoryController };

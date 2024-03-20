import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, description, price, category_id } = req.body;
    const createProductService = new CreateProductService();

    if (!req.file) {
      throw new Error("Error arquivo de upload inválido.");
    } else {
      const { originalname, filename: banner } = req.file;

      const product = await createProductService.execute({
        name,
        description,
        price,
        banner,
        category_id,
      });
      return res.json(product);
    }
  }
}

export { CreateProductController };

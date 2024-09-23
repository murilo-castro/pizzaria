import { Request, Response } from "express";
import { ListOrdersService } from "../../services/order/ListOrdersService";

class ListOrderController {
  async handle(req: Request, res: Response) {
    const listOderService = new ListOrdersService();
    const orders = await listOderService.execute();

    return res.json(orders);
  }
}

export { ListOrderController };

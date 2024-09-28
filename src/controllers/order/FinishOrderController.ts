import { Request, Response } from "express";
import { FinishOrderSevice } from "../../services/order/FinishOrderSevice";

class FinishOrderController {
  async handle(req: Request, res: Response) {
    const { order_id } = req.body;

    const finishOrderService = new FinishOrderSevice();
    const order = await finishOrderService.execute({ order_id });

    return res.json(order);
  }
}

export { FinishOrderController };

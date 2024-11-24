import express from 'express';
import { OrderController } from './order.controller';

const orderRouter = express.Router();
//route for order product
orderRouter.post('/orders', OrderController.createOrder);
//route for revenue from orders
orderRouter.get('/orders/revenue', OrderController.calculateRevenue);

export default orderRouter;

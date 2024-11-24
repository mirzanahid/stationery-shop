"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const orderRouter = express_1.default.Router();
//route for order product
orderRouter.post('/orders', order_controller_1.OrderController.createOrder);
//route for revenue from orders
orderRouter.get('/orders/revenue', order_controller_1.OrderController.calculateRevenue);
exports.default = orderRouter;

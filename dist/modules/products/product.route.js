"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const productRouter = express_1.default.Router();
//route for create product
productRouter.post('/products', product_controller_1.ProductControllers.createProduct);
//route for get product
productRouter.get('/products', product_controller_1.ProductControllers.getProducts);
//route for get specific product
productRouter.get('/products/:productId', product_controller_1.ProductControllers.getSingleProudct);
//route for update product
productRouter.put('/products/:productId', product_controller_1.ProductControllers.updateProduct);
//route for delete product
productRouter.delete('/products/:productId', product_controller_1.ProductControllers.deleteProduct);
exports.default = productRouter;

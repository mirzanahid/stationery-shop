import express from 'express';
import { ProductControllers } from './product.controller';

const productRouter = express.Router();

//route for create product
productRouter.post('/products', ProductControllers.createProduct);
//route for get product
productRouter.get('/products', ProductControllers.getProducts);
//route for get specific product
productRouter.get('/products/:productId', ProductControllers.getSingleProudct);
//route for update product
productRouter.put('/products/:productId', ProductControllers.updateProduct);
//route for delete product
productRouter.delete('/products/:productId', ProductControllers.deleteProduct);

export default productRouter;

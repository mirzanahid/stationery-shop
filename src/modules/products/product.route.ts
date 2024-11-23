import express from "express"
import { ProductControllers } from "./product.controller"



const router = express.Router()

//route for create product
router.post('/products', ProductControllers.createProduct)
//route for get product
router.get('/products', ProductControllers.getProducts)
//route for get specific product 
router.get('/products/:productId', ProductControllers.getSingleProudct)
//route for update product 
router.put('/products/:productId', ProductControllers.updateProduct)
//route for delete product 
router.delete('/products/:productId', ProductControllers.deleteProduct)



export const ProductRoute = router;
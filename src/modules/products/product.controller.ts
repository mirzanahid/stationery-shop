import { Request, Response } from 'express';
import { ProductServices } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const result = await ProductServices.createProductIntoDB(productData);

    //send response
    res.status(200).json({
      success: true,
      message: 'Product is create successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      err,
    });
  }
};

const getProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getProductsFromDB();

    res.send({
      status: true,
      message: 'Products retrieved successfully',
      result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: 'Something went wrong',
      error,
    });
  }
};

const getSingleProudct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await ProductServices.getSingleProductFromDB(productId);
    res.send({
      status: true,
      message: 'Product retrieved successfully',
      result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: 'Something went wrong',
      error,
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const productData = req.body;
    const result = await ProductServices.updateProductFromDB(
      productId,
      productData,
    );

    res.send({
      status: true,
      message: 'Product updated successfully',
      result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: 'Something went wrong',
      error,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    await ProductServices.deleteProductFromDB(productId);

    res.send({
      status: true,
      message: 'Product deleted successfully',
      result: {},
    });
  } catch (error) {
    res.send({
      status: false,
      message: 'Something went wrong',
      error,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getProducts,
  getSingleProudct,
  updateProduct,
  deleteProduct,
};

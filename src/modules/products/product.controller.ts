import { Request, Response } from 'express';
import { ProductServices } from './product.service';
import config from '../../app/config';

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
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: 'Something went wrong',
        error,
        stack: config.node_env ? error.stack : undefined,
      });
    }
  }
};

const getProducts = async (req: Request, res: Response) => {
  try {
    const searchTermQuery = req.query.searchTerm as string;

    // if searchTerm has
    if (searchTermQuery) {
      const searchTerm = searchTermQuery.trim().replace(/\s+/g, ' ');

      const searchResult =
        await ProductServices.getProductsBySearchTermFromDB(searchTerm);
      if (searchResult.length === 0) {
        res.status(404).json({
          message: 'Products not found',
          success: false,
        });
      } else {
        res.status(200).json({
          message: 'Products retrieved successfully',
          success: true,
          data: searchResult,
        });
      }
    }
    // if no searchTerm
    else {
      const result = await ProductServices.getProductsFromDB();
      if (result.length === 0) {
        res.status(404).json({
          message: 'Product collection is empty',
          success: false,
        });
      } else {
        res.send({
          message: 'Products retrieved successfully',
          status: true,
          data: result,
        });
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      res.send({
        message: 'Something went wrong',
        status: false,
        error,
        stack: config.node_env ? error.stack : undefined,
      });
    }
  }
};
const getSingleProudct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await ProductServices.getSingleProductFromDB(productId);

    if (result === null) {
      res.status(404).json({
        message: 'Product not found',
        success: false,
      });
    } else {
      res.send({
        message: 'Product retrieved successfully',
        status: true,
        data: result,
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.send({
        message: 'Something went wrong',
        status: false,
        error,
        stack: config.node_env ? error.stack : undefined,
      });
    }
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
    if (result === null) {
      res.status(404).json({
        message: 'Product not found',
        success: false,
      });
    } else {
      res.send({
        message: 'Product updated successfully',
        status: true,
        result,
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.send({
        message: 'Something went wrong',
        status: false,
        error,
        stack: config.node_env ? error.stack : undefined,
      });
    }
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await ProductServices.deleteProductFromDB(productId);

    if (result === null) {
      res.status(404).json({
        message: 'Product not found',
        success: false,
      });
    } else {
      res.send({
        message: 'Product deleted successfully',
        status: true,
        data: {},
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.send({
        message: 'Something went wrong',
        status: false,
        error,
        stack: config.node_env ? error.stack : undefined,
      });
    }
  }
};

export const ProductControllers = {
  createProduct,
  getProducts,
  getSingleProudct,
  updateProduct,
  deleteProduct,
};

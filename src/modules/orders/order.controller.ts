import { Request, Response } from 'express';
import { OrderServices } from './order.service';
import config from '../../app/config';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await OrderServices.createOrderIntoDB(orderData);

    res.send({
      message: 'Order created successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.send({
        message: error.message,
        status: false,
        error,
        stack: config.node_env ? error.stack : undefined,
      });
    }
  }
};

const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.calculateRevenueInDB();

    const total = result.length > 0 ? result[0].totalRevenue : 0;
    const totalRevenue = {
      totalRevenue: total,
    };
    res.send({
      message: 'Revenue calculated successfully',
      status: true,
      data: totalRevenue,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.send({
        status: false,
        message: 'Something went wrong',
        error,
        stack: config.node_env ? error.stack : undefined,
      });
    }
  }
};

export const OrderController = {
  createOrder,
  calculateRevenue,
};

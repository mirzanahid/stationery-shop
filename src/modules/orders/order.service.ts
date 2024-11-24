import { TOrder } from './order.interface';
import OrderModel from './order.model';

const createOrderIntoDB = async (order: TOrder) => {
  const result = await OrderModel.create(order);
  return result;
};

const calculateRevenueInDB = async () => {
  const result = OrderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
  ]);
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  calculateRevenueInDB,
};

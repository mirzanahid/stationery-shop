import mongoose, { model, Schema } from 'mongoose';
import { TOrder } from './order.interface';
import ProductModel from '../products/product.model';

const orderSchema = new Schema<TOrder>(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, 'Quantity must be at least 1'],
    },
    totalPrice: {
      type: Number,
      required: true,
      min: [0, 'Total price must be a positive value'],
    },
  },
  {
    timestamps: true,
  },
);

orderSchema.pre('save', async function (next) {
  try {
    const order = this as TOrder;

    const product = await ProductModel.findById(order.product);
    if (!product) {
      return next(new Error('Product not found'));
    }

    if (product.quantity < order.quantity) {
      return next(new Error('Order faild because of insufficient stock'));
    }

    product.quantity -= order.quantity;

    product.inStock = product.quantity > 0;

    await product.save();
    next();
  } catch (error) {
    next(error as Error);
  }
});

const OrderModel = model<TOrder>('Order', orderSchema);

export default OrderModel;

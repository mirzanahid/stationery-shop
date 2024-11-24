import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import productRouter from './modules/products/product.route';
import orderRouter from './modules/orders/order.route';
const app: Application = express();

//perser
app.use(express.json());
app.use(cors());

//applicaiton routes
app.use('/api', productRouter);
app.use('/api', orderRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcom to Stationery Shop api service');
});

export default app;

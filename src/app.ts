import express, { Application, Request, Response } from  'express';
import cors from "cors";
import { ProductRoute } from './modules/products/product.route';
const app: Application = express();

//perser 
app.use(express.json());
app.use(cors())


//applicaiton routes
app.use('/api', ProductRoute)


app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})


export default app;
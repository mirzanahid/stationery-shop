import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";


const productSchema = new Schema<TProduct>({
    name: {
      type: String,
      required: [true, "Name is required"]
    },
    brand: {
     type: String,
     required: [true, "Brand name is required"]
    },
    price:{
      type: Number,
      required: [true, "Price is required"]
    },
    category: {
      type: String,
      enum:{
        values: ['Writing' , 'Office Supplies' , 'Art' , 'Supplies' , 'Educational' , 'Technology'],
        message: "{Value} is not a valid category"
      },
      required: [true, "Category is required"]
    },
    
    description: {
        type: String,
        required: [true, "Descripiton is required"]
    },
    quantity: {
        type: Number,
        required: [true, "Quantity is required"]
    },
    inStock: {
        type: Boolean,
        required: [true, "inStook is required"]
    },
},
{
  timestamps: true, 
}

)


 const ProductModel = model<TProduct>('Product', productSchema)

 export default ProductModel
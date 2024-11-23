import { TProduct } from "./product.interface"
import  ProductModel  from "./product.model"


const createProductIntoDB = async(product : TProduct)=>{
    const result = await ProductModel.create(product)
    return result
};

const getProductsFromDB = async () =>{
    const result = await ProductModel.find();
    return result
}

const getSingleProductFromDB = async (id: string)=>{
    const result = await ProductModel.findById(id)
    return result
     
}

const updateProductFromDB = async(id: string, data: TProduct)=>{
    const  result = await ProductModel.findByIdAndUpdate(id, data,{new: true});
    return result
}

const deleteProductFromDB = async (id: string)=>{
    const result = await ProductModel.findByIdAndDelete(id)
    return result
}

export const ProductServices = {
    createProductIntoDB,
    getProductsFromDB,
    getSingleProductFromDB,
    updateProductFromDB,
    deleteProductFromDB,
}
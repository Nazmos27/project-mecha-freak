import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductIntoDB = async(payload : TProduct) => {
    const newProduct = await ProductModel.create(payload)
    return newProduct;
}

export const ProductServices = {
    createProductIntoDB,
}
import catchAsync from '../../../utils/catchAsync';
import { ProductServices } from './product.service';

const postProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.createProductIntoDB(req.body);
  res.status(200).json({
    success : true,
    statusCode : 200,
    message : 'Product created successfully',
    data : result
  });
});

export const ProductControllers = {
    postProduct,
}

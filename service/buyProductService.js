const Product = require('../models/Product'); 

async function buyProduct(productId, userId) {

  const product = await Product.findById(productId);
  if (!product) {
    throw new Error('Product not found');
  }
  if (product.stock <= 0) {
    throw new Error('Product out of stock');
  }
  product.stock -= 1;
  await product.save();
  return {
    message: 'Product purchased successfully',
    productId: product._id,
    userId: userId,
  };
}

module.exports = { buyProduct };
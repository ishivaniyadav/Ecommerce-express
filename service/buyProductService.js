// Service to handle buying a product
const Product = require('../models/Product'); // adjust path if needed

async function buyProduct(productId, userId) {
  // Find the product by ID
  const product = await Product.findById(productId);
  if (!product) {
    throw new Error('Product not found');
  }

  // Optionally, check if product is in stock
  if (product.stock <= 0) {
    throw new Error('Product out of stock');
  }

  // Decrement stock
  product.stock -= 1;
  await product.save();

  // Optionally, create an order record here
  // Return product info or confirmation
  return {
    message: 'Product purchased successfully',
    productId: product._id,
    userId: userId,
  };
}

module.exports = { buyProduct };
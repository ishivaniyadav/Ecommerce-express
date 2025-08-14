const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { buyProductController } = require('../controllers/buyProductController');

// Get all products
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Buy a product
router.post('/buy/:id', buyProductController); 

module.exports = router;
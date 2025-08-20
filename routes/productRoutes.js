const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { buyProductController } = require('../controllers/buyProductController');

router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

router.post('/buy/:id', buyProductController); 

module.exports = router;
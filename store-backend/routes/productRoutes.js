const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// CREATE: Add a new product
router.post('/', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) { res.status(500).json(err); }
});

// READ: Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) { res.status(500).json(err); }
});

// READ: Get single product
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) { res.status(500).json(err); }
});

// UPDATE & DELETE routes would follow similar logic using findByIdAndUpdate and findByIdAndDelete

module.exports = router;
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { protect } = require('../middleware/authMiddleware');

// 1. ADD PRODUCT (Seller Only)
router.post('/', protect, async (req, res) => {
    if (req.user.role !== 'seller') {
        return res.status(403).json({ msg: 'Only sellers can add products' });
    }
    try {
        const { title, price, unit, image, quantity } = req.body;
        const newProduct = new Product({
            title,
            price,
            unit,
            image,
            quantity,
            seller: req.user.id,
            locality: req.user.locality // Auto-tag product with seller's location
        });
        const product = await newProduct.save();
        res.json(product);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// 2. GET PRODUCTS (Filtered by User's Locality)
router.get('/', protect, async (req, res) => {
    try {
        // Only show products from the user's neighborhood
        const products = await Product.find({ locality: req.user.locality });
        res.json(products);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
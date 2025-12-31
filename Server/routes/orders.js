const express = require('express');
const router = express.Router();
const Order = require('../models/Order'); // You need to create models/Order.js first if not done
const { protect } = require('../middleware/authMiddleware');

// 1. PLACE ORDER
router.post('/', protect, async (req, res) => {
    try {
        const { products, totalAmount, sellerId } = req.body;
        const newOrder = new Order({
            buyerId: req.user.id,
            sellerId,
            products,
            totalAmount,
            status: 'Pending'
        });
        const order = await newOrder.save();
        res.json(order);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// 2. GET MY ORDERS
router.get('/myorders', protect, async (req, res) => {
    try {
        const orders = await Order.find({ buyerId: req.user.id });
        res.json(orders);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
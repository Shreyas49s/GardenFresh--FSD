const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a product title'],
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'Please add a price']
    },
    unit: {
        type: String,
        required: [true, 'Please specify the unit (e.g., kg, piece)']
    },
    image: {
        type: String
    },
    quantity: {
        type: Number,
        required: [true, 'Please add quantity'],
        default: 0
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    locality: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', productSchema);

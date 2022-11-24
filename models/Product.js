const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    category: {
        type: String
    },
    cuisine: {
        type: String
    }
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
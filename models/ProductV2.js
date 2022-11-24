const mongoose = require('mongoose');

const ProductV2Schema = new mongoose.Schema({
    name: {
        type: String
    },
    category: {
        type: String
    },
    cuisine: {
        type: String
    },
    price: {
        type: Number
    }
}, { timestamps: true });

const ProductV2 = mongoose.model('ProductV2', ProductV2Schema);

module.exports = ProductV2;
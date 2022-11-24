const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const OrderV2Schema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: "UserV2"
    },
    listProducts: [
        {
            productId: { type: ObjectId, ref: 'ProductV2' },
            amount: Number
        }
    ]
}, { timestamps: true });

const OrderV2 = mongoose.model('OrderV2', OrderV2Schema);

module.exports = OrderV2;
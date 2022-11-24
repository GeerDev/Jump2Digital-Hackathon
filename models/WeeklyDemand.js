const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const WeeklyDemandSchema = new mongoose.Schema({
    week: {
        type: Number
    },
    center_id: {
        type: ObjectId,
        ref: 'Center'
    },
    meal_id: {
        type: ObjectId,
        ref: 'Product'
    },
    checkout_price: {
        type: Number
    },
    base_price: {
        type: Number
    },
    emailer_for_promotion: {
        type: Number
    },
    homepage_featured: {
        type: Boolean
    },
    num_orders: {
        type: Number
    }
}, { timestamps: true });

const WeeklyDemand = mongoose.model('WeeklyDemand', WeeklyDemandSchema);

module.exports = WeeklyDemand;
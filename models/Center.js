const mongoose = require('mongoose');

const CenterSchema = new mongoose.Schema({
    city_code: {
        type: Number
    },
    region_code: {
        type: Number
    },
    center_type: {
        type: String,
        enum: ["Bon Digital Talent", "MWC Supermercados", "MercaBDT"]
    },
    op_area: {
        type: Number
    }
}, { timestamps: true });

const Center = mongoose.model('Center', CenterSchema);

module.exports = Center;
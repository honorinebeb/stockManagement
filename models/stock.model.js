const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productCode: { required: true, type: String },
    price: { required: true, type: Number },
    amount: { required: true, type: String },
    quality: { required: true, type: Number },
    measurements: {
        required: true,
        type: String,
        enum: {
            values: ["LITLES", "PCS","MIL","GRAMS"],
            message: "{value} is not a valid ",
        }
    },
    expiredDate: { 
        required: true, 
        type: Date,
        default: new Date(), 
    },
    updateTime: { required: false, type: Date },
});

module.exports = mongoose.model('product', ProductSchema);

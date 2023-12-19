const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productCode: { required: true, type: String },
    price: { required: true, type: String },
    amount: { required: true, type: String },
    quality: { required: true, type: String },
    email: { required: true, type: String },
    expiredDate: { required: true, type: String },
    nationalId: { required: true, type: String },
    role: {
        type: String,
        required: true,
        enum: {
            values: ["Secretary", "assistant","STOCK_ADMIN","STOCK"],
            message: "{value} is not a valid role",
        }
    },
    createDate: { 
        required: true, 
        type: Date,
        default: new Date(), 
    },
    updateTime: { required: false, type: Date },
});

module.exports = mongoose.model('product', ProductSchema);

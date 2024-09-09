const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrdersSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Ensure this references a User model
});

const OrdersModel = mongoose.model('Order', OrdersSchema);

module.exports = OrdersModel;

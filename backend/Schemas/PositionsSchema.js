const { Schema } = require('mongoose');

// Define the schema
const PositionsSchema = new Schema({
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss:Boolean// Define as Boolean with a default value
});

module.exports = { PositionsSchema };

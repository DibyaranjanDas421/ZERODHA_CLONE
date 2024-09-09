const {model}=require('mongoose');
const {OrdersSchema}=require('../Schemas/OrdersSchema');

const OrderModel= model("order",OrdersSchema);

module.exports=OrderModel;
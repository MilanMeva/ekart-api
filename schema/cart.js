let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let ObjectId = mongoose.Schema.Types.ObjectId;

let CartSchema = new Schema({
    products:{type:[{
        productId:ObjectId,
        quantity:Number,
    }]},
    cartTotal:Number
})

let Cart = mongoose.model('Cart',CartSchema);

module.exports = {
    Cart,
    CartSchema
}
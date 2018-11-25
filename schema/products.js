let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let {ReviewSchema} = require('./review')

let ProductSchema = new Schema({
    displayName:{type:String},
    shortDesc:String,
    description:String,
    category:String,
    quantity:Number,
    price:Number,
    dicount:Number,
    deliveryCharges:Number,
    seller:String,
    img:String,
    review:[{type:ReviewSchema,ref:"Review"}]
})


let Product = mongoose.model('Product', ProductSchema);

module.exports = {
    Product,
    ProductSchema
}
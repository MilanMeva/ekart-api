let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let CardSchema = new Schema({
   nameOnCard:String,
   expiryMonth:Number,
   expiryYear:Number,
   cardNumber:String
})

let Card = mongoose.model('Card', CardSchema);

module.exports = {
    Card,
    CardSchema
}
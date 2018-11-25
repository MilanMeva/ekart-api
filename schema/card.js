let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let CardSchema = new Schema({
   nameOnCard:String,
   expiryMonth:Number,
   expiryYear:Number,
   cardNumber:String
})


CardSchema.statics.updateCard = (card)=>{
    return this.findOneAndUpdate({_id:card.id},cart,{upsert:true,new:true}).exec();
}


let Card = mongoose.model('Card', CardSchema);

module.exports = {
    Card,
    CardSchema
}
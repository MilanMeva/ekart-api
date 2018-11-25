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


CartSchema.statics.updateCart = (cart,cb)=>{
    return this.findOneAndUpdate({_id:cart.id},cart,{upsert:true,new:true}).exec();
}


let Cart = mongoose.model('Cart',CartSchema);

module.exports = {
    Cart,
    CartSchema
}
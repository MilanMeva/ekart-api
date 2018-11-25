let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let AddressSchema = new Schema({
    address:{type:String,required:true},
    pincode:{type:String,required:true},
    phoneNo:{type:String,require:true},
    state:{type:String,required:true},
    city:{type:String,required:true}
})


AddressSchema.statics.updateAddress = (address,cb)=>{
    return this.findOneAndUpdate({_id:address.id},address,{upsert:true,new:true}).exec();
}

let Address = mongoose.model('Address', AddressSchema);

module.exports = {
    AddressSchema,
    Address
}
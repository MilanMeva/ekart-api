let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let ObjectId = mongoose.Schema.Types.ObjectId;

let UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    addresses: [{type: ObjectId, ref: 'Address'} ],
    cards: [{type: ObjectId, ref: 'Card'}],
    cart: { type: ObjectId , ref:"Cart" }
})

UserSchema.statics.findUserById = function (id){
    return this.findOne({ _id: id },"-password")
        .populate({ path: 'addresses', model: 'Address' })
        .exec();
}

UserSchema.statics.updateUserById = function(id,user){
    return this.findOneAndUpdate({_id:id},user,{upsert:true,new:true}).exec();
}

let User = mongoose.model('User', UserSchema);

module.exports = {
    UserSchema, User
}
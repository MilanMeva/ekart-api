let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;


let ReviewSchema = new Schema({
    reviewBy:ObjectId,
    review:String,
    rating:Number,
    createdAt:{type:Date,default:new Date().now()}
})

let Review = mongoose.model("Review",ReviewSchema);

module.exports = {
    Review,
    ReviewSchema
}
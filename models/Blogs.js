var mongoose=require("mongoose")
var blogScema = mongoose.Schema({
    title   :    String,
    img     :    String,
    body    :    String,
    created :   {
                    type : Date,
                    default : Date.now
                } 
})

module.exports=mongoose.model("Blog",blogScema);
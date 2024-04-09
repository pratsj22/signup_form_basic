const mongoose= require('mongoose')

const signUPSchema= mongoose.Schema({
    name:String,
    email: String,
    company:String,
    phone: Number,
    message: String,
})

module.exports= mongoose.model("SignUp",signUPSchema)
const bodyParser = require('body-parser');
const express = require('express');
const connectDB = require('./config/dbConnection');
const app= express();
connectDB();
const signUp= require('./models/signUpModel')
const port=3000;
app.use(bodyParser.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.send("hello world")
})
app.post('/api',async(req,res)=>{
    const {first_name,email,company,phone,message}= req.body;
    const user_email=await signUp.findOne({
        email,
    })
    if(user_email) {
        res.send("Email already exists");
        return;
    }
    const user_phone=await signUp.findOne({
        phone,
    })
    if(user_phone) {
        res.send("Phone Number already exists");
        return;
    }
    await signUp.create({
        name:first_name,
        email,
        company,
        phone,
        message,
    })
    res.send("Signup Successful")
})
app.listen(port,()=>{
    console.log("listening on port",port);
})
const mongoose=require('mongoose');
const express=require('express');
const app=express();
const cookieParser = require("cookie-parser");
mongoose.connect(" mongodb+srv://test:123@cluster0.w9qva0o.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("connection established"))
.catch((err)=>console.log(err));
app.use(express.json());
app.use(cookieParser());
app.use('/public',express.static("public"));
app.use(require('./routes/auth'));
app.listen(5000,"localhost",()=>{console.log("Server started")});

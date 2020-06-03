const express = require("express");

const app = express();

app.use((req,res,next)=>{
    console.log('First middle ware');
    next();
});
app.use((req,res,next)=>{
    res.send("Hello from express")
});

module.exports =app;
const express = require('express');
const path = require('path');
const app=express();
app.set('view engine',"ejs")
app.set('views', path.join(__dirname));

app.get('/',(req,res)=>{
    res.send("Home page")
})
app.get('/about',(req,res)=>{
    res.render("about")
})

app.listen(3000,()=>{
    console.log("Server started successfully on port :3000")
})

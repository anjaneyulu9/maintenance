var express = require('express');
var app = express();


app.get('/get', (req,res)=>{
    console.log("get is executing");
    res.send("get is executing");
})

var port = 3000;
app.listen(port, ()=>{
    console.log(`application is running on ${port}`);
})

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
//authorization
// let auth=(req:any,res:any,next:any):any=>{
//     let allHeaders=req.headers;
//     if(allHeaders.token=="ashu"){
//         next();
//     }
//     else{
//         res.status(500).json({auth:"fail"});
//     }
// };
//authentication in postman 
// app.get("/login",[auth],(req:any,res:any):any=>{
//     if(req.query.uname==="ashu" && req.query.upwd==="ashu@1234"){
//         res.status(201).json({login:"success"});
//     }
//     else{
//         res.status(401).json({login:"fail"});
//     }
// });
app.get("/login", function (req, res) {
    if (req.query.uname === "ashu" && req.query.upwd === "ashu@1234") {
        res.status(201).json({ login: "success" });
    }
    else {
        res.status(401).json({ login: "fail" });
    }
});
//default request
app.get("/", function (req, res) {
    res.sendFile("C:\\Users\\Administrator\\Desktop\\NODE_FROM_ZERO\\Node\\index.html");
});
app.listen(8000, function () {
    console.log("SERVER RUNNING SUCCESSFULLY ON PORT 8000");
});

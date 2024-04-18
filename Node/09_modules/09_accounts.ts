import * as express from "express";

let accounts:any=express.Router();

accounts.get("/",(req:any,res:any):any=>{
    res.status(200).json({"message":"Welcome to accounts module"});
});

accounts.get("/login",(req:any,res:any):any=>{
    if(req.query.uname==="ashu" && req.query.upwd==="ashu@1234"){
        res.status(201).json({"login":"success"});
    }
    else{
        res.status(401).json({"login":"fail"})
    }
});

export default accounts;
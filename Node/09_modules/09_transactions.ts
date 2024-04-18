import * as express from "express";

let transactions:any=express.Router();

let auth1=(req:any,res:any,next:any):any=>{
    let allHeaders:any=req.headers;
    let token:any=allHeaders.token;

    if(token==="nodejs"){
        next();
    }else{
        res.status(401).json({"auth":"fail"});
    }
}


let auth2=(req:any,res:any,next:any):any=>{
    let allHeaders:any=req.headers;
    let wish:any=allHeaders.wish;

    if(wish==="welcome"){
        next();
    }else{
        res.status(401).json({"auth":"fail"});
    }
}

transactions.get("/",[auth1,auth2],(req:any,res:any):any=>{
    if(req.query.uname==="ashu" && req.query.upwd==="ashu@1234"){
        res.status(201).json({"login":"success"});
    }
    else{
        res.status(401).json({"login":"fail"})
    }
});

export default transactions;

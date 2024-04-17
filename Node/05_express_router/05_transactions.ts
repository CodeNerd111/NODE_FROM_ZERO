import * as express from "express";


let transaction:any=express.Router();

transaction.get("/",(req:any,res:any):any=>{
    res.status(200).json({"message":"Welcome to transaction modules"})
});

transaction.post("/",(req:any,res:any):any=>{
    res.status(200).json({"message":"Your transaction section will be continued here"})
});

export default transaction;
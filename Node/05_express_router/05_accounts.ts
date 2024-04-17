import * as express from "express";

let account:any=express.Router();

account.get("/",(req:any,res:any):any=>{
    res.status(200).json({"message":"Welcome to account section"});

});


account.post("/",(req:any,res:any):any=>{
    res.status(200).json({"{message":"account section will be added later"});
});

export default account;

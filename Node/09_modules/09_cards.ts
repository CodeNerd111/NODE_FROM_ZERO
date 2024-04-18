import * as express from "express";

let cards:any=express.Router();

cards.get("/",(req:any,res:any):any=>{
    res.status(200).json({"message":"Welcome to card module"});
});

export default cards;
import * as express from "express";

let app:any=express();


app.get("/",(req:any,res:any):any=>{
    res.status(200).json({"message":"server "})

});

app.listen(8080,()=>{
    console.log("server running on successfully")
});


//before running we have  to convert the .ts file into .js file 
//the command for it is:tsc 04_express.ts 
//befoe that we haveto install the typescript :npm install -g typescript
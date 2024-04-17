import * as express from "express";


let app:any=express();

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


app.get("/login",(req:any,res:any):any=>{
        if(req.query.uname==="ashu" && req.query.upwd==="ashu@1234"){
            res.status(201).json({login:"success"});
        }
        else{
            res.status(401).json({login:"fail"});
        }
    });

//default request

app.get("/",(req:any,res:any):any=>{
    res.sendFile("C:\\Users\\Administrator\\Desktop\\NODE_FROM_ZERO\\Node\\index.html");

});



app.listen(8000,()=>{
    console.log("SERVER RUNNING SUCCESSFULLY ON PORT 8000");
});
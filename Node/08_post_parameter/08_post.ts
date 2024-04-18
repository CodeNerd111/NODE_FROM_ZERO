import * as express from "express";
import * as bodyparser from "body-parser";//body-parser is used to read the post parameters


//create the rest objects
let app:any=express();//this rest object used to develop the rest services like GET,POST,PUT,DELETE

//set the MIME type
app.use(bodyparser.json());//here json is the communication language between client and server 

//receive the form data, and parse the data (extended e.g; uname,upwd...)
app.use(bodyparser.urlencoded({extended:false}));


//authorization 
let auth:any=(req:any,res:any,next:any):any=>{
    let allHeaders:any=req.headers;
    let token:any=allHeaders.token;
    if(token==="nodejs"){
        next();

    }
    else{
        res.status(401).json({auth:"fail"});
    }

}

//create the post request
app.post("/login",[auth],(req:any,res:any):any=>{
    if(req.body.uname==="ashu" && req.body.upwd==="ashu@1234"){
        res.status(200).json({login:"success"});

    }
    else{
        res.status(400).json({login:"fail"})
    }

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("SERVER STARTED RUNNING SUCCESSFULLY ON ", PORT);
});

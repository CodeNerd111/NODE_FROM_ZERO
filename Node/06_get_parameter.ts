//read get parameters in expressjs

// http://localhost:8080/login/uname/ashu/upwd/ashu@1234
/*
import * as express from "express";

let app:any=express();


// Handling parameters in the route path
app.get("/login/uname/:uname/upwd/:upwd",(req:any,res:any):any=>{
    if(req.params.uname==="ashu" && req.params.upwd==="ashu@1234"){
        res.status(200).json({"login":"success"});
    }
    else{
        res.status(200).json({"login":"fail"});
    }

});

app.listen(8000,()=>{
    console.log("server running on port 8000");
});
*/

//http://localhost:8000/login?uname=ashu&upwd=ashu@1234
//req.query.uname
//req.query.upwd

import * as express from "express";

let app:any=express();



// Handling parameters in the query string
app.get("/login",(req:any,res:any):any=>{
    if(req.query.uname==="ashu" && req.query.upwd==="ashu@1234"){
        res.status(200).json({"login":"success"});
    }
    else{
        res.status(200).json({"login":"fail"});
    }

});

app.listen(8000,()=>{
    console.log("server running successfully on port 8000");
});




//req.query: This property contains an object representing the query parameters that are part of the URL. 
//These parameters typically come after the "?" character in a URL and are key-value pairs separated by "&". 
//For example, in the URL http://localhost:8000/login?uname=ashu&upwd=ashu@1234,
// the query object would be { uname: '123', upwd: 'ashu@1234' }. You access it using req.query.

//req.params: This property contains route parameters in a URL. 
//Route parameters are named URL segments that are used to capture the values specified at their position in the URL. 
//For example, in the route /users/:id, id is a route parameter. 
//When a request is made to /users/123, req.params would be { id: '123' }. You access it using req.params.


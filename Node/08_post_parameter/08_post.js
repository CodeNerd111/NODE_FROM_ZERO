"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyparser = require("body-parser"); //body-parser is used to read the post parameters
//create the rest objects
var app = express(); //this rest object used to develop the rest services like GET,POST,PUT,DELETE
//set the MIME type
app.use(bodyparser.json()); //here json is the communication language between client and server 
//receive thlse form data, and parse the data (extended e.g; uname,upwd...)
app.use(bodyparser.urlencoded({ extended: false }));
//authorization 
var auth = function (req, res, next) {
    var allHeaders = req.headers;
    var token = allHeaders.token;
    if (token === "nodejs") {
        next();
    }
    else {
        res.status(401).json({ auth: "fail" });
    }
};
//create the post request
app.post("/login", [auth], function (req, res) {
    if (req.body.uname === "ashu" && req.body.upwd === "ashu@1234") {
        res.status(200).json({ login: "success" });
    }
    else {
        res.status(400).json({ login: "fail" });
    }
});
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("SERVER STARTED RUNNING SUCCESSFULLY ON ", PORT);
});

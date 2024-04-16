"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get("/", function (req, res) {
    res.status(200).json({ "message": "server " });
});
app.listen(8080, function () {
    console.log("server running on successfully");
});

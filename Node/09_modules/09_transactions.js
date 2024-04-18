"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var transactions = express.Router();
var auth1 = function (req, res, next) {
    var allHeaders = req.headers;
    var token = allHeaders.token;
    if (token === "nodejs") {
        next();
    }
    else {
        res.status(401).json({ "auth": "fail" });
    }
};
var auth2 = function (req, res, next) {
    var allHeaders = req.headers;
    var wish = allHeaders.wish;
    if (wish === "welcome") {
        next();
    }
    else {
        res.status(401).json({ "auth": "fail" });
    }
};
transactions.get("/", [auth1, auth2], function (req, res) {
    if (req.query.uname === "ashu" && req.query.upwd === "ashu@1234") {
        res.status(201).json({ "login": "success" });
    }
    else {
        res.status(401).json({ "login": "fail" });
    }
});
exports.default = transactions;

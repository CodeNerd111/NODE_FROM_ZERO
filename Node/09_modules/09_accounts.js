"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var accounts = express.Router();
accounts.get("/", function (req, res) {
    res.status(200).json({ "message": "Welcome to accounts module" });
});
accounts.get("/login", function (req, res) {
    if (req.query.uname === "ashu" && req.query.upwd === "ashu@1234") {
        res.status(201).json({ "login": "success" });
    }
    else {
        res.status(401).json({ "login": "fail" });
    }
});
exports.default = accounts;

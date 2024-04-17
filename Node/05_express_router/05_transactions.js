"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var transaction = express.Router();
transaction.get("/", function (req, res) {
    res.status(200).json({ "message": "Welcome to transaction modules" });
});
transaction.post("/", function (req, res) {
    res.status(200).json({ "message": "Your transaction section will be continued here" });
});
exports.default = transaction;

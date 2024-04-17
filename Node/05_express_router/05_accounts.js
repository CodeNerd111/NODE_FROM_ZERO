"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var account = express.Router();
account.get("/", function (req, res) {
    res.status(200).json({ "message": "Welcome to account section" });
});
account.post("/", function (req, res) {
    res.status(200).json({ "{message": "account section will be added later" });
});
exports.default = account;

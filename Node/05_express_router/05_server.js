"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var _05_transactions_1 = require("./05_transactions");
var _05_accounts_1 = require("./05_accounts");
var app = express();
app.use("/module1", _05_transactions_1.default);
app.use("/module2", _05_accounts_1.default);
app.listen(8000, function () {
    console.log("server listen on the port 8000");
});
//http://localhost:8080/module1
//http://localhost:8080/module1/pierre
//http://localhost:8080/module2    (GET)
//http://localhost:8080/module2    (POST)

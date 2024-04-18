"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var _09_accounts_1 = require("./09_accounts");
var _09_transactions_1 = require("./09_transactions");
var _09_cards_1 = require("./09_cards");
var app = express();
app.use("/accounts", _09_accounts_1.default);
app.use("/transactions", _09_transactions_1.default);
app.use("/cards", _09_cards_1.default);
app.listen(8000, function () {
    console.log("server running sucessfully ");
});

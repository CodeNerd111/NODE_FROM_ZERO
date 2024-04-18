import * as  express from "express";
import accounts from "./09_accounts";
import transactions from "./09_transactions";
import cards from "./09_cards";

let app:any=express();

app.use("/accounts",accounts);
app.use("/transactions",transactions);
app.use("/cards",cards);

app.listen(8000,()=>{
    console.log("server running sucessfully ");
});


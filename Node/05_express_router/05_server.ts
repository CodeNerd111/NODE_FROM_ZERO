import * as express from "express";
import transactions from "./05_transactions";
import account from "./05_accounts";


let app:any=express();

app.use("/module1",transactions);
app.use("/module2",account);
app.listen(8000,()=>{
    console.log("server listen on the port 8000 successfully");
});



//http://localhost:8080/module1
//http://localhost:8080/module1
//http://localhost:8080/module2    
//http://localhost:8080/module2    
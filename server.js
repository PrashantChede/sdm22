var express=require("express");
const app=express();
var bodyparser=require("body-parser");
var path=require("path");
const e = require("express"

app.get("/",function(req,resp){
    resp.sendFile(path.join(__dirname,"./public/index.html"));
});
app.listen(7777);
console.log("server is listening on port 7777");

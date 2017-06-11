var express=require("express");
var open=require("open");
var path=require("path");

var app=express();
app.get("/",function(req,res)
{
    res.sendFile(path.join(__dirname,'../src/child.html'));
}
);
var port=3001;
app.listen(port,function(err)
{
if(err)
{
    console.log(err);
}
else
{
    open('http://localhost:'+port);
}
});
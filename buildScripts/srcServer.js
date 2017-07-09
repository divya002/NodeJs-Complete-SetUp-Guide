import express from "express";
import open from "open";
import path from "path";
import webpack from 'webpack';
import config from '../webpack.config.dev';

const app=express();
const compiler=webpack(config);
app.use(require('webpack-dev-middleware')(compiler,{
    noInfo:true,
    publicPath:config.output.publicPath
}));

app.get("/",function(req,res)
{
    res.sendFile(path.join(__dirname,'../src/child.html'));
}
);
const port=3001;
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
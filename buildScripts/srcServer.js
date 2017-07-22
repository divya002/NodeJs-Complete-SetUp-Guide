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

app.get('/',function(req,res)
{
    res.sendFile(path.join(__dirname,'../src/index.html'));
}
);

app.get('/child',function(req,res)
{
    res.sendFile(path.join(__dirname,'../src/child.html'));
}
);

app.get('/inform',function(req,res)
{
    res.sendFile(path.join(__dirname,'../src/inform.html'));
}
);

app.get('/users',function(req,res){
res.json ([
{"id":1,"firstName":"ram","lastName":"Smith","email":"div2@gmail.com"},
{"id":2,"firstName":"ram","lastName":"Smith","email":"div2@gmail.com"},
{"id":3,"firstName":"ram","lastName":"Smith","email":"div2@gmail.com"}

]
);
});
const port=3000;
app.listen(port,function(err)
{
if(err)
{
    console.log(err);//eslint-disable-line no-console
}
else
{
    open('http://localhost:' + port);
}
});
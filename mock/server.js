let http = require('http');
let fs = require('fs');
let url = require('url');
let sliders = require('./sliders');
http.createServer((req,res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method == 'OPTIONS') {
     return res.end();
   }
  let {pathname,query} = url.parse(req.url);
  if(pathname === '/sliders'){
    res.setHeader("Content-Type","application/json;charset=utf-8");
    res.end(JSON.stringify(sliders));
  }
}).listen(9999)

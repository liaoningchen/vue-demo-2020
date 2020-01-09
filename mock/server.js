let http = require('http');
let fs = require('fs');
let url = require('url');
let sliders = require('./sliders');

function read(callback){
  fs.readFile('./book.json','utf-8',function (err,data) {
    if (err || data.length ===0){
      callback([]);//如果有错误，或者文件没有长度 返回空
    }else {
      callback(JSON.parse(data));
    }
  });
}

http.createServer((req,res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method == 'OPTIONS') {
     return res.end();
   }
  let {pathname,query} = url.parse(req.url);
  if(pathname === '/sliders'){//轮播图
    res.setHeader("Content-Type","application/json;charset=utf-8");
    return  res.end(JSON.stringify(sliders));
  }
  if(pathname === '/hot'){//热门图书
    res.setHeader("Content-Type","application/json;charset=utf-8");
      read(function (books) {
        let hot = books.reverse().slice(0,6);
        res.end(JSON.stringify(hot));
      })
  }
}).listen(9999)

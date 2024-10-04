const http = require("http");
const fs=require("fs")
const server = http.createServer((req, res) => {
  console.log(req.method,req.url);
  if (req.method == "GET" && req.url == "/getproduct") {
    fs.readFile("./db.json","utf-8",(err,data)=>{
      if(err){
        console.log(err)
        res.end(err)
      }else{
        console.log(data)
        res.end(data);
      }
    })
  } else if (req.method == "GET" && req.url == "/addproduct") {
    res.end("<h1>Product Add Successfully....</h1>");
  }else {
    res.end("<h1>Request Not Match....</h1>");
  }
});

server.listen(8080, () => {
  console.log("server is running at 8080................");
});

// http://localhost:8080

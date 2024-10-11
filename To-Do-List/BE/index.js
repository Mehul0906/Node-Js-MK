const express=require("express")
const app=express()
var cors = require('cors')
const fs=require("fs")
app.use(express.json())
app.use(cors())
app.get("/getproduct",(req,res)=>{
    fs.readFile("./db.json","utf-8",(err,data)=>{
        if(err)
        {
          res.send(err)
        }else{
            res.send(data)
        }
    })
})
    
app.listen(8080,()=>{
    console.log("server is running pn port 8080")   
})
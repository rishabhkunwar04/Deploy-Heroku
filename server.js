const express=require('express')
const app=express()
const path=require('path')

app.use('/public',express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
  res.send("backend hosting")
})

app.listen(3333,()=>{
  console.log('http://localhost:3333')
})
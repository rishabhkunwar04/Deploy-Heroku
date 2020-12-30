const express=require('express')
const app=express()
const path=require('path')

const SERVER_PORT=process.env.PORT || 3333

app.use('/public',express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
  res.send("backend hosting")
})

app.listen(SERVER_PORT,()=>{
  console.log('server started')
})
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/gethello',(req,res) =>{
    res.send('Hello Node!!')
})

app.listen(port,() =>{
    console.log('Server is running at http://localhost:3000')
})
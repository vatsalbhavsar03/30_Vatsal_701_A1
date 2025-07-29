const http = require('http')

const server =  http.createServer((req,res) =>{
    res.writeHead(200,{'content-type' : 'text/plain'})
    res.end('Hello From the Server')
})

const port = process.env.port || 3000
server.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})
const aedes = require('aedes')()
const server = require('net').createServer(aedes.handle)
const port = 2008


aedes.on('closed', () => {
    console.log("connection closed")
})

server.listen(port, () => {
  console.log('server started and listening on port ', port)
})


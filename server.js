let net = require('net')
const HOST = '127.0.0.1'
const PORT = '6969'

net.createServer( (sock)=> {
    console.log('connected: ${sock.remoteAddress}:${sock.remotePort}')

    sock.on('data', (data) => {
        console.log('data: ${data} from ${sock}')
    })
}  ).listen(PORT,HOST)

console.log('server start: ${HOST}:${PORT}')
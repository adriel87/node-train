const http = require('http')
const fs = require('fs')

const [,,PORT,PATH] = process.argv
 

const server = http.createServer((request, response)=>{
    const readStream = fs.createReadStream(PATH)
    
    
    readStream.on('open',()=>{
        readStream.pipe(response)
    })

    readStream.on('error', err=> console.error(err))

    readStream.on('end',()=> console.log('\n'))
    
    
    // response
    //   .writeHead(200, {
    //     'Content-Length': Buffer.byteLength('holi'),
    //     'Content-Type': 'text/plain'
    //   })
    //   .end('holi');

})

server.listen(PORT, 77, ()=>{
    // console.log('the best http server in the world')
})



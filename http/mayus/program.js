const http = require('http')
const { argv } = require('process');
const { StringDecoder } = require('string_decoder');

const PORT = argv[2] || 8080

http.createServer((req, res)=> {
    if (req.method === 'POST') {
        const decoder = new StringDecoder('utf8');
        req.on('data', data => {
            res.write(decoder.write(Buffer.from(data)).toUpperCase(), err => {
                if (err) {
                    console.log(err)
                }
            })
            
        })

    }
    // else{
    //     res.end();
    // }
    // res.write(decoder.write(Buffer.from(data)).toUpperCase(), err=> console.error(err))
    // res.end()
})
.listen(PORT)
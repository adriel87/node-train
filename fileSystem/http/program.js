const http = require('http')

const url = process.argv[2]

const characterNumber = 0

http.get(url, (res)=>{


    const {statusCode} = res;

    // console.log(statusCode);

    const contentType = res.headers['content-type']

    // console.log(contentType);


    res.setEncoding('utf8');
    let rawData = ''
    res.on('data', chunk => {
        rawData += chunk
    })
    res.on('end', ()=>{
        try {
            console.log(rawData.length)
            console.log(rawData);
        } catch (e) {
            console.error(e.message)
        }
    })
    
    // res.on('data', (data)=>{
    //     console.log(data.length);
    // })
    // res.end('data', data=> console.log(data))
})
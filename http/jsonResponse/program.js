const http = require('http');
const { argv } = require('process');

const PORT = argv[2] || 8080;

http.createServer((req,res)=>{
    const unixtime = new Date().getTime()
    
    res.writeHead(200,{'Content-Type':'application/json'})
    
    const url = req.url;
    const pathname = url.split('?')[0]
    let format=''
    let enterDate =''


    // console.log(pathname);

    if(url.includes('?')){
        format= url.split('?')[1]?.split('=')?.[0]
        enterDate= url.split('?')[1]?.split('=')?.[1]

        // console.log(format,enterDate);
    }



    if (req.method !== 'GET') {
        res.end('Just get mettod')
    }else{
        switch (pathname) {
            case '/api/parsetime':
                let date = null;

                switch (format) {
                    case 'iso':
                        date = new Date(enterDate)
                        break;
                    case 'utc':
                        date = new Date(date.toUTCString())
                        break;
                    default:
                       
                        break;
                }

                const time={
                    hour:date.getHours(),
                    minute: date.getMinutes(),
                    second: date.getSeconds(),
                }
                // console.log(time);
                res.end(JSON.stringify(time))

                break;

                case '/api/unixtime':

                const date1 = {
                    unixtime
                }

                res.end(JSON.stringify({unixtime: new Date().getTime()}))
                break;

            default:
                res.end('invalid route')
                break;
        }
        
    }
})
.listen(PORT,console.log('arriba'))
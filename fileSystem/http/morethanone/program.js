const args = process.argv

const [,,urlONE,urlTWO,urlTHREE] = args

const http = require('http')

async function getInfo(url){

    return new Promise((resolve,rejects)=>{
        
        http.get(url, res=>{
            res.setEncoding('utf-8')
            
            let rawData=''
    
            res.on('data', chunk=> rawData += chunk)
            res.on('end',()=>{
                try {
                    resolve(rawData)
                } catch (error) {
                    rejects(error)
                }
            })
        })
    }

      
       
    )
}

Promise.allSettled([
    getInfo(urlONE),
    getInfo(urlTWO),
    getInfo(urlTHREE)
]).then(data=>{
    data.map(({value})=> console.log(value))
})
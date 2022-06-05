const args = process.argv

const [,,urlONE,urlTWO,urlTHREE] = args

const { rejects } = require('assert')
const http = require('http')
const { resolve } = require('path')

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
//   await  http.get(url,(res)=> {
//         res.setEncoding('utf8');
//         let rawData = ''
//         res.on('data', chunk => {
//         rawData += chunk
//         })
//         res.on('end', ()=>{
//         try {
//             ra
//             return rawData
//         } catch (e) {
    //             return e
    //         }
//     })
//     })
// }

// async function start(){
//     getInfo(urlONE)
//     .then(data=>console.log(data))
//     .catch(e=> console.log(e))
// }

// start()

Promise.allSettled([
    getInfo(urlONE),
    getInfo(urlTWO),
    getInfo(urlTHREE)
]).then(data=>{
    data.map(({value})=> console.log(value))
})
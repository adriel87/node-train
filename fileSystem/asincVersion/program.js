const fs = require('fs/promises')

const path = process.argv[2]

const spliceData= data => data.split('\n')
const numberOfLines = array => array.length - 1


fs.readFile(path,{encoding:'utf-8'})
.then(data=>{
    console.log(numberOfLines(spliceData(data)))
})
.catch(err=>{
    console.error(err)
})
// .finally( console.log('fin') )

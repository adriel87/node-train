const folderPath = process.argv[2]
const extension = '.'+ process.argv[3]



const {listFiles} = require('./miModule')


listFiles(folderPath,extension,(err,data)=>{
    if (err) console.log(err)
    console.log(data);
})


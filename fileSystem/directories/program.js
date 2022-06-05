const path = require('path')
const fs = require('fs/promises')

// const workingPath = process.argv[1]
const dirRoute = process.argv[2] || ''
let extension = process.argv[3] || ''

if (extension.charAt(0) !== '.') {
    extension = '.' + extension
}




fs.readdir(dirRoute)
.then(data=> {
    data.map(d=> {
         if(path.extname(`${dirRoute}/${d}`) === extension){
             console.log(d);
         }

    })
   
})
.catch(err => console.log(err))
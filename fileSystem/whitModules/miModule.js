'use strict'
const fs = require('fs')

const folder = process.argv[2]
const ext = '.' + process.argv[3]


const listFiles = (path,extension,callback) =>{
  const patha = require('path')
  
  fs.readdir(folder, function (err, files) {
    if (err) return callback(err)

    files.forEach(function (file) {
      if (patha.extname(file) === extension) {
        callback(null,file)
      }
    })
  })

}

module.exports={
  listFiles  
}
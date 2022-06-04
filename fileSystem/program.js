const fs = require('fs')

const path = process.argv[2]

class TextReader {
    constructor(path){
        this.path = path
        this.text = fs.readFileSync(this.path,{encoding:'utf8'})
    }

    numberOfLines(){
        return this.text.split('\n').length - 1
    }
}

const myFile = new TextReader(path)

console.log(myFile.numberOfLines())
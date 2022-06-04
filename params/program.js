const args = process.argv

const INIT_POSITION = 2

function spliceArgument(array){
    return array.splice(INIT_POSITION)
}

function ArraySum(array) {
    return array.reduce((previus,current) =>Number(previus)+Number(current) )
}

console.log(ArraySum(spliceArgument(args)))
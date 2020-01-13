const fs = require('fs')

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday'
}

let bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSON)

let dataBuffer = fs.readFileSync('1-json.json')
console.log(dataBuffer)
const dataJSON = dataBuffer.toString()
console.log(JSON.parse(dataJSON))

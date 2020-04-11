
const fs = require('fs')

const dataBuffer = fs.readFileSync('1_jsonstore.json');
console.log(dataBuffer);
debugger
const dataJSON = dataBuffer.toString()
console.log(dataJSON);
const data = JSON.parse(dataJSON)
console.log(data.title);
/*const fs = require('fs')
//fs.writeFileSync('notes.txt','my name is fahad'); this will overrite the current text
fs.appendFileSync('notes.txt', ' again this will append after the curent text');*/


// const add = require('./utils')
// const name = 'fahad'
// console.log(name);
// const sum = add(5,5)
// console.log(sum)

const getNotes = require('./notes.js')

let mynotes = "fahad bin munirs todo notes"
const note = getNotes(mynotes)
console.log(note);
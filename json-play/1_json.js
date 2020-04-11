const fs = require('fs')
const print = console.log;
const book = {
	title: "Algorithm with c++",
	author: "fahad bin munir"
}

const JSON_book = JSON.stringify(book) // converted the js object to json it's just a string, cannot access property like JSON_book.titie x
fs.writeFileSync('1-json.json', JSON_book);

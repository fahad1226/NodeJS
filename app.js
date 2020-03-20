const Person = require('./person')

const persn1 = new Person('Jon Doe',30)

console.log(persn1.name)

persn1.greetings();

console.log(__dirname,__filename)

console.log(persn1.goodMorning('Fahad'));

// module warpper function

//(function(exports,require,module,__filename,__dirname))
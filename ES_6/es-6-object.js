

// 1
const name = 'Fahad'
const email = 'fahad@gmail.com'
const id = 12

const user = {  // this is es-5 syntax
	name: name,
	email: email,
	id : id
}


const user = { // instead of es-5 now i can write the es-6 syntax like this
	name,
	email,
	id
}

console.log(user);
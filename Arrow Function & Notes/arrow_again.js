
const myinfo = (name,age,id) => {
	if (name == 'fahad' && age == 21 && id == 1226) {
		console.log('this is really '+name);
	}
}

myinfo('fahad',21,1226)


const fahad = {
	name: 'Fahad Bin Munir',
	age: 21,
	email: 'fahadbinmnr@gmail.com',
	info() {
		console.log(this.name);
		console.log(this.age);
		console.log(this.email);
	}
}


fahad.info()
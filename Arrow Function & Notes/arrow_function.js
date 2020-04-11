const print = console.log;



/*const sqaure = (x) => {
	return x * x;
}

print(sqaure(43));*/

const sqaure = x => x * x; // this is usefull when the function has only one statement to execute

print(sqaure(5))

// 1
/*const event = {

	name: 'Fahad',
	email: 'fahadbinmnr@gmail.com',
	behavior: () => { // this way we cannot access the 'this' keyword
		print(`Hello ${this.email} it's your birthday`)
	}
}*/

//2
/*const event = {

	name: 'Fahad',
	email: 'fahadbinmnr@gmail.com',
	behavior:function() { // this way we can access the 'this' keyword
		print(`Hello ${this.email} it's your birthday`)
	}
}
*/
//3
const event = {

	name: 'Fahad',
	email: 'fahadbinmnr@gmail.com',
	guests: ['fahad','andrew','mike','will','tom'],
	behavior() { 				// this is the best way to use the arrow function in this kinda situations
		print(`Hello ${this.email} it's your birthday`)
	},
	showGuestLists() {
		this.guests.forEach((guest) => {
			print(`welcome ${guest} youre attending ${this.name}'s birthday party `)
		})
	}
}

event.showGuestLists()
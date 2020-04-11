
// nested promise 
/*const add = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(a + b)
		},2000);
	})
}

add(1,2).then((sum) => {
	console.log(sum);
	add(sum, 6).then((sum2) => {
		console.log(sum2);
	}).catch(e => {
		console.log(e);
	})
}).catch(e => {
	console.log(e);
})

*/

//promise chaining

const subtract = (a,b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(a - b) 
		},2000);
	})
}


subtract(20,20).then((sub1) => {
	console.log(sub1);
	return subtract(sub1, 23)
}).then((sub2) => {
	console.log(sub2);
}).catch(e => {
	console.log(e);
})
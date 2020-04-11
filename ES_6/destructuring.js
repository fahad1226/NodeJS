
const product = {
	label: 'red notebook',
	price: '30$',
	stock: 201,
	salePrice: undefined
}


/*const label = product.label; // poor es-5 syntax
const price = product.price  // poor es-5 syntax
console.log(label);
console.log(price);*/


const {label:productLabel, price, rating = 9} = product // nice and easy es-6 syntax, this is known as Destructuring
//console.log(label); // I renamed this label to productLabel
console.log(price);
console.log(rating);
console.log(productLabel);



const transaction = (order, { label, price, stock }) => {
	console.log(label, price, stock);
}


/*const products = {
	label: 'red notebook',
	price: '30$',
	stock: 201,
	salePrice: undefined
}
*/
transaction('order', product)
/*console.log('starting');


setTimeout(() => {
	console.log('2 seconds timer');
},2000);

setTimeout(() => {
	console.log('0 seconds timer');
},0);


console.log('stopping');*/



//test call stack


const listLocations = (locations) => {
	locations.forEach((location) => {
		console.log(location)
	})
}

const myLocations = ['Chittagong','Dhaka','NYC']

listLocations(myLocations)
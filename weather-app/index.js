
const request = require('request')

/*const url = 'https://jsonplaceholder.typicode.com/posts'

request({ url: url, json:true } ,(error, response) => {

	//const data = JSON.parse(response.body)
	console.log(response.body);

})

*/


const geocoding_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/12aht.json?access_token=pk.eyJ1IjoiZmFoYWQtMTIyNiIsImEiOiJjazhta2lmZmcwazQwM21wc3JkaWRiam95In0.fr8SU-ecC9x90Dm05AavxQ'

request({ url: geocoding_url, json:true }, (error,response) => {
	if (error) {
		console.log('unable to connect to the internet');
	} else if(response.body.features.length === 0) {
		console.log('unable to find location,try another search');
	} else {
		const latitude = response.body.features[0].center[1]
		const longitute = response.body.features[0].center[0]
		console.log(latitude, longitute);
		console.log(response.body);		
	}

})


const x = 12;
const y = 12;
const sum = x + y;

console.log(sum);
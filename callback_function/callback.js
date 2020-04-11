
const request = require('request')
const geocode = (address, callback) => {
	const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoiZmFoYWQtMTIyNiIsImEiOiJjazhta2lmZmcwazQwM21wc3JkaWRiam95In0.fr8SU-ecC9x90Dm05AavxQ'

	request({ url: url, json:true }, (error, response) => {
		if (error) {
			callback('unavle to connect to the location service', undefined)
		}
		else if(response.body.features.length == 0) {
			callback('unable to find location,try another search', undefined)
		}
		else {
			callback(undefined, {
				lattitude: response.body.features[0].center[0]
				longitude: response.body.features[0].center[1]
			})
		}
	})
}

geocode("New York",(error, data) {
	console.log('Error', error);
	console.log('Data', data);
})
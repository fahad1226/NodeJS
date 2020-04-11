
const axios = require('axios')

axios.get('https://pomber.github.io/covid19/timeseries.json')
	.then(response => {
		if (response.data.confirmed > 1000) {
			console.log(response.data);
		}
	})
const path = require('path')
const express = require('express')
const axios = require('axios')

/*console.log(__dirname);
console.log(__filename);
console.log(path.join(__dirname, '../public/index.html'));
*/



//console.log(publicDirectoryPath);

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public/')
app.set('view engine','hbs')
app.use(express.static(publicDirectoryPath))


app.get('/test', (req,res) => {
	if (!req.query.search) {
		return res.send({
			error: "you must provide a search term"
		})
	}
	console.log(req.query.search);
	res.send({
		request: req.query,
		message: "Hello Express",
		friends: ['fahad','ross','joey','chandler'],
		info: [
			{
				name: 'test',
				id: 1
			},
			{
				name: 'test2',
				id:2
			}
		],
		empty: []
	})
})

app.get('/weather', (req,res) => {
	const myquery = req.query.address
	const geocoding_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ myquery +'.json?access_token=pk.eyJ1IjoiZmFoYWQtMTIyNiIsImEiOiJjazhta2lmZmcwazQwM21wc3JkaWRiam95In0.fr8SU-ecC9x90Dm05AavxQ'
	const weather_info = axios.get(geocoding_url).then(res => {
		console.log(res.data);
	})
	
	res.send({
		address: weather_info
	})

})



app.get('/hbs', (req,res) => {
	const info = {
		name: 'Fahad BIn Munir',
		email: 'fahad@gmail.com'
	}
	res.render('index', {info:info})
})


const port = process.env.PORT || 3000

app.listen(port, () => {
	console.log(`server started on port ${port}`);
})
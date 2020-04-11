const express = require('express')
require('./db/mongo_test')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
app.use(express.json())


// user creation endpoints
app.post('/users', (req,res) => {
	const user = new User(req.body)
	user.save().then(() => {
		res.send(user)
	}).catch(err => {
		console.log(err);
		res.status(400).send(err)
	}) 
});



//task createtion endpoints

app.post('/task', (req,res) => {
	const task = new Task(req.body)

	task.save().then(() => {
		res.send(task)
	}).catch(err => {
		res.status(400).send(err)
	})
})



//get endpoints all users

app.get('/users', (req,res) => {
	User.find({}).then((users) => {
		res.send(users)
	}).catch(err => {
		res.status(500).send(err)
	})
})

// get endpoints single user


app.get('/users/:id', (req,res) => {
	const _id = req.params.id;

	User.findById(_id).then(user => {
		if (!user) {
			res.status(404).send("user not found")
		} else {
			res.send(user)
		}
	}).catch(err => {
		res.status(404).send("user not found")
	})
})


const port = process.env.PORT || 3000
app.listen(port, () => {
	console.log(`server is running on port ${port}`);
})
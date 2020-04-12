const express = require('express')
require('./db/mongo_test')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
app.use(express.json())


// user creation endpoints
app.post('/users', async (req,res) => {
	const user = new User(req.body)
	//sync await based
	try {
		await user.save()
		await res.status(200).send(user)
	} catch(e) {
		res.status(500).send("somethif went wrong " + e)
	}



	//promise based
	/*user.save().then(() => {
		res.send(user)
	}).catch(err => {
		console.log(err);
		res.status(400).send(err)
	}) */
});



//update user

app.patch('/users/:id', async (req, res) => {
	try {
		const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators:true})
		if (!user) {
			res.status(404).send('user not found')
		}
		
		res.status(200).send(user)
	}
	catch(e) {
		res.status(500).send('server error')
	}
})



//task createtion endpoints

app.post('/task', async (req,res) => {
	const task = await Task(req.body)
	await task.save()
	res.send(task)

	/*task.save().then(() => {
		res.send(task)
	}).catch(err => {
		res.status(400).send(err)
	})*/
})


app.patch('/task/:id', async (req,res) => {
	try {
		const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators: true})
		if (!task) {
			res.status(404).send('no task exists yet')
		}		
		res.status(200).send(task)
	} catch(e) {
		res.status(500).send(e)
	}
})



//get endpoints all users

app.get('/users', async (req,res) => {

	const user = await User.find({})
	try {

		if (!user) {
			res.status(404).send('user not found')
		}
	} catch(e) {
		res.status(500).send('server error')
	}

	res.status(200).send(user)
/*	User.find({}).then((users) => {
		res.send(users)
	}).catch(err => {
		res.status(500).send(err)
	})*/
})

// get endpoints single user


app.get('/users/:id', async (req,res) => {
	const _id = req.params.id;

	try {
		const user = await User.findById(_id)

		if (!user) {
			res.status(404).send('user not found')
		}
	} catch(e) {
		res.status(500).send("server error")
	}

	res.statsu(200).send(user)	

	/*User.findById(_id).then(user => {
		if (!user) {
			res.status(404).send("user not found")
		} else {
			res.send(user)
		}
	}).catch(err => {
		res.status(404).send("user not found")
	})*/
})




//delete user

app.delete('/users/:id', async (req,res) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id)
		if (!user) {
			res.status(404).send('user not found')
		}
		res.send(user)
	} catch(e) {
		res.status(500).send(e)
	}
})

const port = process.env.PORT || 3000
app.listen(port, () => {
	console.log(`server is running on port ${port}`);
})
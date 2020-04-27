const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()


router.post('/register', async (req,res) => {
	const updates = Object.keys(req.body)
	const allowedUpdates = ['first_name','last_name','email', 'password', 'age']
	const isValidOpretaions = updates.every((update) => allowedUpdates.includes(update))

	if (!isValidOpretaions) {
		res.status(400).send('invalid registrations!')
	}
	const user = new User(req.body)

	try {
		await user.save()
		const token = await user.generateAuthToken()
		await res.status(200).send({user, token})
	} catch(e) {
		res.status(400).send("something went wrong " + e)
	}

});


router.post('/users/login', async (req,res) => {
	try {
		const user = await User.findByCredentials(req.body.email,req.body.password)	
		const token = await user.generateAuthToken()
		res.send({user, token})

	} catch(e) {
		res.status(400).send('unable to login' +e)
	}
})


//update user

router.patch('/users/:id', async (req, res) => {

	const updates = Object.keys(req.body)
	const allowedUpdates = ['first_name','last_name','email', 'password', 'age']
	const isValidOpretaions = updates.every((update) => allowedUpdates.includes(update))

	if (!isValidOpretaions) {
		res.status(400).send('invalid updates!')
	}

	try {
		const user = await User.findById(req.params.id)
		updates.forEach((update) => user[update] = req.body[update])
		await user.save()
		//const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators:true})
		if (!user) {
			res.status(404).send('user not found')
		}
		
		res.status(200).send(user)
	}
	catch(e) {
		res.status(500).send('server error')
	}
})


//get endpoints all users

router.get('/users', auth , async (req,res) => {

	const user = await User.find({})
	try {

		if (!user) {
			res.status(404).send('user not found')
		}
	} catch(e) {
		res.status(500).send('server error')
	}

	res.status(200).send(user)

})


router.get('/users/me', auth, (req,res) => {
	res.send(req.user)
})



router.post('/users/logout', auth , async (req,res) => {

	try {
		req.user.tokens = req.user.tokens.filter((token) => {
			return token.token !== req.token
		})
		await req.user.save()

	} catch(e) {
		res.status(500).send('something went wrong')
	}
})

router.get('/users/:id', async (req,res) => {
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

router.delete('/users/:id', async (req,res) => {
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

module.exports = router;
const express = require('express')
const Task = require('../models/task')
const router = new express.Router()

router.post('/task', async (req,res) => {
	const task = await Task(req.body)
	await task.save()
	res.send(task)
	/*task.save().then(() => {
		res.send(task)
	}).catch(err => {
		res.status(400).send(err)
	})*/
})

router.get('/tasks', async (req,res) => {
	try {	
		const tasks = await Task.find({})
		if (!tasks) {
			res.status(404).send('tasks not found')
		}
		res.send(tasks)
	} catch(e) {
		res.status(500).send('server error')
	}
})

router.patch('/task/:id', async (req,res) => {
	const updates = Object.keys(req.body)
	const allowedUpdates = ['task_title','description','completed']
	const isValidOperations = updates.every((update) => {
		return allowedUpdates.includes(update)
	})

	if (!isValidOperations) {
		res.status(400).send('invalid updates!')
	}


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


module.exports = router
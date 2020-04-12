const mongoose = require('mongoose')
const validator = require('validator')


const Task = mongoose.model('Task', {
	task_title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true
	},
	task_date: {
		type: Date,
	},
	completed: {
		type: Boolean,
		default: false
	}
})

module.exports = Task;
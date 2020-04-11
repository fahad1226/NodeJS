const mongoose = require('mongoose')
const validator = require('validator');


const User = mongoose.model('User', {
	first_name: {
		type: String
	},
	last_name: {
		type: String
	},
	email: {
		type: String,
		required: true,
		lowercase: true,
		trim: true,
		validate(value) {
			if(!validator.isEmail(value)) {
				throw new Error("email is not valid")
			}
		}
	},
	age: {
		type: Number,
		validate(value) {
			if(value < 0 ) {
				throw new Error("age must be positive number")
			}
		}
	}
})


module.exports = User;
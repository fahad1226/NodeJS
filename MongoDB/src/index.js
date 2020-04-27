const express = require('express')
require('./db/mongo_test')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)





const multer = require('multer')
const upload = multer({
	dest: 'images',
	limits: {
		fileSize: 1000000
	},
	fileFilter(req, file, cb) {
		if (!file.originalname.match(/\.(doc|docx|pdf)$/)) {  // endsWith('.pdf') for single file validation
			return cb(new Error('please,upload word document and pdf file'));
		}
		cb(undefined, true)
	}
})


app.post('/uploads', upload.single('upload'), (req,res) => {
	res.send()
}, (error, req, res, next) => {
	if (error) {
		res.status(400).send({
			error: error.message
		})
	}
})



const port = process.env.PORT || 3000
app.listen(port, () => {
	console.log(`server is running on port ${port}`);
})



// difference between encryption and hashing 

/*
encryption is two way algorithm
'encryption' ->  'hjwegdt273t2876qw@122wjedwfuwh' -> 'encryption' // this is encryption algirthm


hhashing is one way algorthm
'hashing' -> 'jhwdqbjw2e1871234!@@#$5g2e2ebdwdkdmdhkjdqd$' -> 'there is no return back in hashing'

hashing algo is not reversable,its */


/*const bcrypt = require('bcryptjs')


const myBcryptFunction = async () => {
	const password = 'red12345!'
	const hashedPassword = await bcrypt.hash(password, 8)

	console.log(`plain text password is ${password} `);
	console.log(`hashed password is  ${hashedPassword}`);

	const isMatch = await bcrypt.compare('password', hashedPassword)
	console.log(isMatch);
}


myBcryptFunction()*/

/*
jwt ->>
const myjwtFunction = async () => {
	const token = await jwt.sign({_id: '123abc'}, 'secret', { expiresIn: '7 days' })

	console.log(token);

	const data = await jwt.verify(token,'secret')
	console.log(data);
}

myjwtFunction()
*/
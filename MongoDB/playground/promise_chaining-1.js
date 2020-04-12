
require('../src/db/mongo_test')
const User = require('../src/models/user')

//5e908bf4ac49820197043b20

// this is done by using promise chainig
/*User.findByIdAndUpdate('5e90a34e70df0e0e15e9605b', {age:22}).then((user) => {
	console.log(user);
	return User.countDocuments({age:22})
}).then((result) => {
	console.log(result);
}).catch(error => {
	console.log(error);
})*/


//now lets do this work using the async await function

const updateAgeAndCount = async (id, age) => {
	const user = User.findByIdAndUpdate(id, { age })
	const count = User.countDocuments({age: 22})
	return user
}

updateAgeAndCount('5e90a34e70df0e0e15e9605b', 100).then((user) => {
	console.log(user);
}).catch(e => {
	console.log(e);
})
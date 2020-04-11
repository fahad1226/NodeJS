
require('../src/db/mongo_test')
const Task = require('../src/models/task')


//5e90a6f275201b10373d5a2e
Task.findByIdAndDelete('5e90a9c075201b10373d5a2f').then((user) => {
	console.log(user.task_title +'user has been deleted');
	return Task.countDocuments({ completed: false })
}).then((res) => {
	console.log(res);
}).catch(e => {
	console.log(e);
})
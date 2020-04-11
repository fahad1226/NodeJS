
const mytasks = {
	tasks: [{
		text: 'grocery shopping',
		completed: true
	},
	{
		text: 'clean yard',
		completed: false
	},
	{
		text: 'film course',
		completed: false
	}

	],

/*	checkTask() {
		this.tasks.forEach((task) => {
			if(task.completed === false) {
				console.log(`${task.text} is still incomepleted`);
			}
		})
	}
*/
	checkTask() {
		const taskToDo = this.tasks.filter((task) => task.completed === false)
		return taskToDo
	}
}

console.log(mytasks.checkTask());
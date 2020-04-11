
const my_json = {

	name: 'Fahad',
	email: 'fahda@gmail.com',
	university: 'Premier University',
	friends: ['fahad','ross','joey','will','jon'],
	info: [{
		passion: "Programming",
		fav_tool: "NodeJS"
	},
	{
		python: "data science",
		php: "web development",
		javascript: "both"
	}
	]
}


console.log(my_json.name);
console.log(my_json.friends[2]);
console.log(my_json.info[1].javascript);
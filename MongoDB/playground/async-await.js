
const doWork = async () => {
	info = {
		name: "fahad",
		age: "22",
		passion: "Programming",
		fav_lang: "JavaScript",
		friends: ['ross','racheal','monica','joey','chandler','pheobe'],
		obj: {
			test: ['a','b','c','d'],
			array_obj: [
				{
					fav_one: "black mirros",
					fav_two: "prison break",
					test_arr: [1,2,3,4,5]
				},
				{
					recent_one: "Money Heist"
				}
			],
			animal: "tiger",
			buck: "a dog",
			series: ["got","money heist","prison break","black mirror"]
		}
	}
	return info
}

doWork().then((info) => {
	console.log(info.obj.array_obj[0].test_arr[3]);
}).catch(e => {
	console.log(e);
})
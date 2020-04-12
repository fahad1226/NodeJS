
const add = (a,b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (a < 0 || b < 0) {
				return reject('numbers cannot be zero')
			}
			resolve(a+b)
		},2000);
	})
}

const doWork = async () => {
	const sum1 = await add(10,20);
	const sum2 = await add(sum1,30);
	const sum3 = await add(sum2,30);
	const sum4 = await add(sum3,-30);
	return sum4;
}

doWork().then((res) => {
	console.log(res);
}).catch(e => {
	console.log(res);
})
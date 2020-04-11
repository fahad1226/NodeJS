

const recursion = (n) => {
	if (n === 0) {
		return 0;
	} else {
		return recursion(n-1)+n;
	}
}

const sum = recursion(3742)

console.log(sum);
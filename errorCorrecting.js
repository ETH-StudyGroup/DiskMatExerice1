const result = [];

const firstString = (number) => {
	let stringOne = number.toString(2);
	while (stringOne.length < 7) {
		stringOne = "0" + stringOne;
	}
	secondString(127, stringOne);
	if (number > 0) {
		firstString(number - 1);
	}
}

const secondString = (number, stringOne) => {
	let stringTwo = number.toString(2);
	while (stringTwo.length < 7) {
		stringTwo = "0" + stringTwo;
	}
	// Comparison
	let count = 0;
	for (let i = 0; i < 7; i++) {
		if (stringOne.charAt(i) === stringTwo.charAt(i)) {
			count++;
		}
	}
	if (count <= 3) {
		result.push([stringOne, stringTwo]);
	}
	if (number > 0) {
		secondString(number - 1, stringOne);
	}
}

firstString(127);
console.log('all possible results (each twice)', result);
console.log('number of all results: ', result.length / 2);

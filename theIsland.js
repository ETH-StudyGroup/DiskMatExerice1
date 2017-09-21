/*
let arr = [];

for (i = 0; i < 250; i = i + 8) {
	arr.push(i + 1);
}

let newArray = arr.filter((item) => {
	return item % 5 !== 0;
})

let newArray2 = newArray.filter((item) => {
	return item % 7 !== 0;
})

let newArray3 = newArray2.filter((item) => {
	return ((item % 7) - 2) === 0;
})

let newArray4 = newArray3.filter((item) => {
	return ((item % 5) - 3) === 0;
})


console.log(newArray4);
*/

let coconuts;

for (i = 1; i < 250; i = i + 8) {
	if ((i % 5) - 3 === 0 && (i % 7) - 2 === 0) {
		coconuts = i;
	}
}

const forEachPirate = (coconuts - 3) / 5;

console.log(forEachPirate);

let coconuts;

for (i = 1; i < 250; i = i + 8) {
	if ((i % 5) - 3 === 0 && (i % 7) - 2 === 0) {
		coconuts = i;
	}
}

const forEachPirate = (coconuts - 3) / 5;

console.log('For each Pirate', forEachPirate);

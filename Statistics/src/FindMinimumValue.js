function findMinimumValue (sequence) {
	var minimumValue = sequence[0];
	var seqLength = sequence.length;
	for (var i = 0; i < seqLength; i++) {
		if (minimumValue > sequence[i]) {
			minimumValue = sequence[i];
		}
	}
	return minimumValue;
};
module.exports = findMinimumValue;

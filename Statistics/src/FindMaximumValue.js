function findMaximumValue (sequence) {
	var maximumValue = sequence[0];
	var seqLength = sequence.length;
	for (var i = 0; i < seqLength; i++) {
		if (maximumValue > sequence[i]) {
			maximumValue = sequence[i];
		}
	}
	return maximumValue;
};
module.exports = findMaximumValue;

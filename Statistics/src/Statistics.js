function statistics (sequence) {

	var minimumValue = sequence[0];
	var maximumValue = sequence[0];
	var sequenceLength = sequence.length;
	var totalValue = 0;

	for (var i = 0; i < sequenceLength; i++) {

		totalValue += sequence[i];

		if (minimumValue > sequence[i]) {
			minimumValue = sequence[i];
		} else if (maximumValue < sequence[i]) {
			maximumValue = sequence[i];
		}
	}

	averageValue = totalValue/sequenceLength;

	return ("Minimum Value: " + minimumValue + "\n" +
				 "Maximum Value: " + maximumValue + "\n" +
 			 	 "Sequence Length: " + sequenceLength + "\n" +
				 "Average Value: " + averageValue + "\n");
};

module.exports = statistics;

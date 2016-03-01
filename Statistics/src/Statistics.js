function statistics (sequence[]) {
	var minimumValue = sequence[0];
	var maximumValue = sequence[0];
	var sequenceLength = sequence.length;
	var averageValue = 0;

	for (i = 0; i < sequenceLength; i++) {
		averageValue += sequence[i];
		if (minimumValue < sequence[i]) {
			minimumValue = sequence[i];
		} else if (maximumValue > sequence[i] {
			maximumValue = sequence[i];
		} 
	}
	averageValue /= sequenceLength;
}

function findSequenceAverage (sequence) {
  var sequenceAverage = 0;
	var seqLength = sequence.length;
	for (var i = 0; i < seqLength; i++) {
    sequenceAverage += sequence[i];
	}
	return sequenceAverage /= seqLength;
};
module.exports = findSequenceAverage;

var statistics = require("../src/Statistics.js")

describe("Statistics", function () {

	it ("should show minimum, maximum and average value equals 7 and sequence length equals 1 when given [7]", function () {
		expect(statistics([7])).toEqual("Minimum Value: 7\nMaximum Value: 7\nSequence Length: 1\nAverage Value: 7\n")
	});

	it ("should show minimum equals 2, maximum equals 8, average value equals 5 and sequence length equals 2 when given [8,2]", function () {
		expect(statistics([8,2])).toEqual("Minimum Value: 2\nMaximum Value: 8\nSequence Length: 2\nAverage Value: 5\n")
	});

	it ("should show minimum equals -8, maximum equals 15, average value equals 8 and sequence length equals 3 when given [8,-8,15]", function () {
		expect(statistics([8,-8,15])).toEqual("Minimum Value: -8\nMaximum Value: 15\nSequence Length: 3\nAverage Value: 5\n")
	});

});

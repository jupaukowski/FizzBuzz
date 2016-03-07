var findSequenceAverage = require("../src/FindSequenceAverage.js")

describe("findSequenceLength", function () {

	it("see if it works", function () {
		expect(true).toBe(true);
	});

	it ("should return 1 when given 3", function () {
		expect(findSequenceAverage([3])).toEqual(3);
	});

	it ("should return 6 when given [4,2,6]", function () {
		expect(findSequenceAverage([4,2,6])).toEqual(4);
	});

	it ("should return 18 when given [3,18,-7,9]", function () {
		expect(findSequenceAverage([3,18,-7,9])).toEqual(5.75);
	});
});

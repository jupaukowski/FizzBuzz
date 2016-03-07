var findMaximumValue = require("../src/FindMaximumValue.js")

describe("FindMaximumValue", function () {

	it("see if it works", function () {
		expect(true).toBe(true);
	});

	it ("should return 3 when given 3", function () {
		expect(findMaximumValue([3])).toEqual(3);
	});

	it ("should return 6 when given [4,2,6]", function () {
		expect(findMaximumValue([4,2,6])).toEqual(6);
	});

	it ("should return 18 when given [3,18,-7,9]", function () {
		expect(findMaximumValue([3,18,-7,9])).toEqual(18);
	});
});

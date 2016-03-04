var findMinimumValue = require("../src/Statistics.js")
var findMaximumValue = require("../src/Statistics.js")

describe("FindMinimumValue", function () {

	it("see if it works", function () {
		expect(true).toBe(true);
	});

	it ("should return 3 when given 3", function () {
		expect(findMinimumValue([3])).toEqual(3);
	});

	it ("should return 2 when given [4,2,6]", function () {
		expect(findMinimumValue([4,2,6])).toEqual(2);
	});

	it ("should return -7 when given [3,18,-7,9]", function () {
		expect(findMinimumValue([3,18,-7,9])).toEqual(-7);
	});
});

describe("FindMaximumValue", function () {

	it("should return 5 when given 5", function () {
		expect(findMaximumValue([5])).toEqual(5);
	});

});

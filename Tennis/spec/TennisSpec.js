var score = require("../src/Tennis.js")

describe ("Tennis", function () {

  it("see if it works", function () {
    expect(true).toBe(true);
  });

  it("should display the correct score - 0:0 > 0:15", function () {
		expect(score(0,15)).toEqual("0:15");
	});

  it("should display the correct score - 0:0 > 15:0", function () {
    expect(score(15,0)).toEqual("15:0");
  });

  it("should display Deuce for score 40:40", function () {
    expect(score(40,40)).toEqual("Deuce");
  });

  it("should display player 1 as winner if score 40:15", function () {
    expect(score(40,15)).toEqual("Player 1 wins!");
  })

  it("should display player 2 as winner if score 15:40", function () {
    expect(score(15,40)).toEqual("Player 2 wins!");
  })
});

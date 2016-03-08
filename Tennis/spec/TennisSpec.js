var tennis = require("../src/Tennis.js")

describe ("Tennis", function () {

  it ("see if it works", function () {
    expect(true).toBe(true);
  });

  it ("should display the correct score - 0:0 > 0:15 - Love-Fifteen", function () {
		expect(tennis([0,0],[0,1])).toEqual("Love-Fifteen");
	});

  it ("should display the correct score - 0:0 > 15:0 - Fifteen-Love", function () {
    expect(tennis([0,0],[1,0])).toEqual("Fifteen-Love");
  });

  it ("should display the correct score - 15:30 > 30:30 - Thirty-All", function () {
    expect(tennis([1,2],[1,0])).toEqual("Thirty-All");
  });

  it ("should display 'Deuce' when the score is 40:40", function () {
    expect(tennis([2,3],[1,0])).toEqual("Deuce");
  });

  it ("should display 'Player 2 wins!' when the score is 0:40", function () {
    expect(tennis([0,2],[0,1])).toEqual("Player 2 wins!");
  });

  it ("should display 'Player 1 wins!' when the score is 40:15", function () {
    expect(tennis([2,1],[1,0])).toEqual("Player 1 wins!");
  });

  it ("should display 'Advantage for Player 1!' when the score is 40:30", function () {
    expect(tennis([2,2],[1,0])).toEqual("Advantage for Player 1!");
  });

  it ("should display 'Advantage for Player 2!' when the score is 40:40 and player 2 scores", function () {
    expect(tennis([3,3],[0,1])).toEqual("Advantage for Player 2!");
  });
});

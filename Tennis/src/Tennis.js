function score (player1, player2) {

  if (player1 == 40 && player1 == player2) {
    return "Deuce";
  } else if (player1 == 40 && player2 <= 15) {
    return "Player 1 wins!";
  } else if (player2 == 40 && player1 <= 15) {
    return "Player 2 wins!";
  } else {
    return player1 + ":" + player2;
  }
};

module.exports = score;

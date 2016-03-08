var tennis = function (oldScore, point) {

  var namePts = [];
  var score = [];

  for (var i = 0; i < oldScore.length; i++){
   score[i] = oldScore[i] + point[i];
  }

  for (var i = 0; i < oldScore.length; i++) {
    if (score[i] == 0) {
      namePts[i] = "Love";
    } else if (score[i] == 1) {
      namePts[i] = "Fifteen";
    } else if (score[i] == 2) {
      namePts[i] = "Thirty";
    } else if (score[i] == 3) {
      namePts[i] = "Forty";
    }
  }


  if (score[0] > 3 || score [1] > 3) {
    if ((score[0] - score[1]) >= 2) {
      return "Player 1 wins!";
    } else if (score[0] == score[1]) {
      return "Deuce";
    } else if ((score[1] - score[0]) >= 2) {
      return "Player 2 wins!";
    } else if ((score[0] - score[1]) == 1) {
      return "Advantage for Player 1!";
    } else if ((score[1] - score[0]) == 1) {
      return "Advantage for Player 2!";
    }
  } else {
    if (namePts[0] == namePts[1]) {
      if (score[0] == 3) {
        return "Deuce";
      } else {
        return namePts[0] + "-All";
      }
    } else {
      return namePts[0] + "-" + namePts[1];
    }
  }
};

module.exports = tennis;

var initials = document.getElementById("initials");
var saveScoreBtn = document.getElementById("save-score-btn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("user");

const highScores = JSON.parse(localStorage.getItem("highscores")) || [];
const maxHigh = 5;

finalScore.innerText = `Your Score: ${mostRecentScore}`;

//saves, sorts, and pushes highscore to local storage
saveHighScore = (e) => {
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: initials.value,
  };
  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);
  localStorage.setItem("highscores", JSON.stringify(highScores));
  window.location.assign("./scores.html");
  console.log(highScores);
};
